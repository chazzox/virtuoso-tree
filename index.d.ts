import React from 'react';
interface ListPropTypes {
    itemHeight?: number;
    endReached?: (num: number) => any;
    dataGenerator: Generator<any, any, any>;
    style?: React.CSSProperties;
}
export declare const FixedSizeTree: React.FC<ListPropTypes>;
export {};
