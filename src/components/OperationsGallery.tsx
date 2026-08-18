import Image from "next/image";

const photos = [
  {
    src: "/operations/warehouse-exterior.webp",
    position: "object-center",
    showCaption: true,
  },
  {
    src: "/operations/container-loading.webp",
    position: "object-center",
    showCaption: false,
  },
  {
    src: "/operations/warehouse-operations.webp",
    position: "object-center",
    showCaption: false,
  },
] as const;

type OperationsGalleryProps = {
  labels: [string, string, string];
};

export default function OperationsGallery({ labels }: OperationsGalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {photos.map((photo, index) => (
        <figure
          key={photo.src}
          className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-sm"
        >
          <Image
            src={photo.src}
            alt={labels[index]}
            fill
            className={`object-cover ${photo.position} transition-transform duration-500 group-hover:scale-[1.02]`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {photo.showCaption && (
            <>
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 px-5 pb-4 text-sm font-semibold text-white">
                {labels[index]}
              </figcaption>
            </>
          )}
        </figure>
      ))}
    </div>
  );
}
