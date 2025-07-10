
import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageViewerProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageViewer = ({ src, alt, isOpen, onClose }: ImageViewerProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="relative max-w-7xl max-h-full">
        <Button
          variant="outline"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default ImageViewer;
