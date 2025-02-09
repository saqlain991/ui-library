// Full component code for SocialCard and SocialCardDemo in one file
import { useState } from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MoreHorizontal,
  Link as LinkIcon,
} from "lucide-react";
import Image from "next/image";

// Utility function to safely handle class names
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

// SocialCard component
interface SocialCardProps {
  author?: {
    name?: string;
    username?: string;
    avatar?: string;
    timeAgo?: string;
  };
  content?: {
    text?: string;
    link?: {
      title?: string;
      description?: string;
      icon?: React.ReactNode;
    };
  };
  engagement?: {
    likes?: number;
    comments?: number;
    shares?: number;
    isLiked?: boolean;
    isBookmarked?: boolean;
  };
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
  onBookmark?: () => void;
  onMore?: () => void;
  className?: string;
}

export function SocialCard({
  author,
  content,
  engagement,
  onLike,
  onComment,
  onShare,
  onBookmark,
  onMore,
  className,
}: SocialCardProps) {
  const [isLiked, setIsLiked] = useState(engagement?.isLiked ?? false);
  const [isBookmarked, setIsBookmarked] = useState(
    engagement?.isBookmarked ?? false
  );
  const [likes, setLikes] = useState(engagement?.likes ?? 0);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
    onLike?.();
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    onBookmark?.();
  };

  return (
    <div
      className={cn(
        "w-full max-w-2xl mx-auto",
        "bg-white dark:bg-zinc-900",
        "border border-zinc-200 dark:border-zinc-800",
        "rounded-3xl shadow-xl",
        className
      )}
    >
      <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
        <div className="p-6">
          {/* Author Section */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Image
                src={author?.avatar ?? "/assets/ui-icon/shadcn.png"}
                alt={author?.name ?? "User Avatar"}
                width={10}
                height={10}
                className="w-10 h-10 rounded-full ring-2 ring-white dark:ring-zinc-800"
              />
              <div>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {author?.name ?? "Shadcn "}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  @{"shadcn-ui"} · {"2hrs ago"}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onMore}
              className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
            >
              <MoreHorizontal className="w-5 h-5 text-zinc-400" />
            </button>
          </div>

          {/* Content Section */}
          <p className="text-zinc-600 dark:text-zinc-300 mb-4">
            {content?.text ??
              "Just launched Kokonut UI! Check out the documentation and let me know what you think 🎨"}
          </p>

          {/* Link Preview */}
          {content?.link && (
            <div className="mb-4 rounded-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden">
              <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-white dark:bg-zinc-700 rounded-xl">
                    {content.link.icon ?? <LinkIcon className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {content.link.title ?? " Kokonut UI Documentation"}
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      {content.link.description ??
                        "A comprehensive guide to Kokonut UI"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Engagement Section */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={handleLike}
                className={cn(
                  "flex items-center gap-2 text-sm transition-colors",
                  isLiked
                    ? "text-rose-600"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-rose-600"
                )}
              >
                <Heart
                  className={cn(
                    "w-5 h-5 transition-all",
                    isLiked && "fill-current scale-110"
                  )}
                />
                <span>{engagement?.likes ?? "490"}</span>
              </button>
              <button
                type="button"
                onClick={onComment}
                className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-blue-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{engagement?.comments ?? "321"}</span>
              </button>
              <button
                type="button"
                onClick={onShare}
                className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-green-500 transition-colors"
              >
                <Share2 className="w-5 h-5" />
                <span>{engagement?.shares ?? "203"}</span>
              </button>
            </div>
            <button
              type="button"
              onClick={handleBookmark}
              className={cn(
                "p-2 rounded-full transition-all",
                isBookmarked
                  ? "text-yellow-500 bg-yellow-50 dark:bg-yellow-500/10"
                  : "text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              )}
            >
              <Bookmark
                className={cn(
                  "w-5 h-5 transition-transform",
                  isBookmarked && "fill-current scale-110"
                )}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Demo Component (SocialCardDemo)
export function SocialCardDemo() {
  const [cards, setCards] = useState([
    {
      id: 1,
      author: {
        name: "Dorian Baffier",
        username: "dorian_baffier",
        avatar:
          "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-04-uuYHWIRvVPi01gEt6NwnGyjqLeeZhz.png",
        timeAgo: "2h ago",
      },
      content: {
        text: "Just launched Kokonut UI! Check out the documentation and let me know what you think 🎨",
        link: {
          title: "Kokonut UI Documentation",
          description: "A comprehensive guide to Kokonut UI",
          icon: <LinkIcon className="w-5 h-5 text-blue-500" />,
        },
      },
      engagement: {
        likes: 128,
        comments: 32,
        shares: 24,
        isLiked: false,
        isBookmarked: false,
      },
    },
  ]);

  const handleAction = (id: number, action: string) => {
    console.log(`Card ${id}: ${action}`);
  };

  return (
    <div className="space-y-8">
      <div>
        {cards.map((card) => (
          <SocialCard
            key={card.id}
            {...card}
            onLike={() => handleAction(card.id, "liked")}
            onComment={() => handleAction(card.id, "commented")}
            onShare={() => handleAction(card.id, "shared")}
            onBookmark={() => handleAction(card.id, "bookmarked")}
            onMore={() => handleAction(card.id, "more")}
          />
        ))}
      </div>
    </div>
  );
}
