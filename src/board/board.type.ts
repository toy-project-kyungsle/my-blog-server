export interface BoardSaveType {
    type: string;
    title: string;
    value: string;
    date: string;
    category: string;
    preview: string;
    link: string;
    tags: string;
    status: number;
    creatorId: number;
    creatorName: string;
    updatorId: number;
    updatorName: string;
    note: string;
}

export interface BoardType {
    id: number;
    type: string;
    title: string;
    value: string;
    date: string;
    category: string;
    preview: string;
    isLocked: number;
    link: string;
    tags: string;
    status: number;
    createdAt: string;
    creatorId: number;
    creatorName: string;
    updatedAt: string;
    updatorId: number;
    updatorName: string;
    isBookMarked: number;
    note: string;
}
