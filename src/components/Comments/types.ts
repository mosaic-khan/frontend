export interface Comment {
  iD: bigint;

  name: string;

  username: string;

  profileUrl: string;

  comment: string;

  time: string;

  hasReplies: boolean;

  isLiked: boolean;

  numLikes: number;

  replies?: Comment[];

  owned: boolean;

  parentId?: bigint;
}
