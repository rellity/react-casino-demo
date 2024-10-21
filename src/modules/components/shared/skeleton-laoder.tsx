export const SkeletonLoader = () => {
    return (
        <div className="relative rounded-lg overflow-hidden shadow-lg aspect-square animate-pulse bg-gray-300">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-500 opacity-75" />
        </div>
    );
}