import Image from 'next/image';

import { cn } from '@/lib/utils';
import { useSidebar } from '@/components/ui/sidebar';

type LogoProps = {
  expandedSrc?: string;
  collapsedSrc?: string;
  className?: string;
  priority?: boolean;
};

export function Logo({
  expandedSrc = '/infovet_logo.svg',
  collapsedSrc = '/infovet_just_logo.svg',
  className,
  priority = true,
}: LogoProps) {
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <Image
        src={isCollapsed ? collapsedSrc : expandedSrc}
        alt='Logo InfoVet'
        width={isCollapsed ? 20 : 120}
        height={isCollapsed ? 24 : 64}
        className={cn(isCollapsed ? 'size-9 mb-2' : 'h-auto')}
        priority={priority}
      />
    </div>
  );
}
