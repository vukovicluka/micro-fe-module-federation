
    export type RemoteKeys = 'products/RemoteButton';
    type PackageType<T> = T extends 'products/RemoteButton' ? typeof import('products/RemoteButton') :any;