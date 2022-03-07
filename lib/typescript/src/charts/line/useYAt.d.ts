import type { AtPoint } from './types';
export declare type ViewAtProps = {
    at: AtPoint;
    offsetY?: number;
};
export declare function useYAt({ at, offsetY }: ViewAtProps): Readonly<{
    value: number;
}>;
