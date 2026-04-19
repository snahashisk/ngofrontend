import Gallery from "@/components/shadcn-studio/blocks/gallery-component-01/gallery-component-01";

const gallerySections = [
  {
    images: [
      {
        src: "/image-4.jpg",
        alt: "image-4",
      },
    ],
  },
  {
    type: "grid",
    images: [
      {
        src: "/image-5.jpg",
        alt: "image-4",
      },
      {
        src: "/image-6.jpg",
        alt: "image-4",
      },
      {
        src: "/image-7.jpg",
        alt: "image-4",
      },
      {
        src: "/image-8.jpg",
        alt: "image-4",
      },
    ],
  },
  {
    type: "grid",
    images: [
      {
        src: "/image-9.jpg",
        alt: "image-4",
      },
      {
        src: "/image-10.jpg",
        alt: "image-4",
      },
      {
        src: "/image-11.jpg",
        alt: "image-4",
      },
      {
        src: "/image-12.jpg",
        alt: "image-4",
      },
    ],
  },
  {
    type: "grid",
    images: [
      {
        src: "/image-9.jpg",
        alt: "image-4",
      },
      {
        src: "/image-10.jpg",
        alt: "image-4",
      },
      {
        src: "/image-11.jpg",
        alt: "image-4",
      },
      {
        src: "/image-12.jpg",
        alt: "image-4",
      },
    ],
  },
];

const GalleryPage = () => {
  return <Gallery sections={gallerySections} />;
};

export default GalleryPage;
