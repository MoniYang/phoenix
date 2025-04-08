// styles/dropdownStyles.ts
import { tv } from 'tailwind-variants';

const dropdown = tv({
  base: 'flex flex-1 relative max-w-full',
});

const dropdownButton = tv({
  base: 'flex flex-1 text-left items-center relative z-[2] w-fit text-white min-h-[48px]  transition-colors',
  variants: {
    variant: {
      black: 'bg-White-opacity5 border-White-opacity5',
      lang: 'bg-Red-opacity5 border-Red-opacity5',
    },
    open: {
      true: 'bg-white/10',
    },
  },
  compoundVariants: [
    {
      variant: 'black',
      open: true,
      class: 'bg-white/10',
    },
    {
      variant: 'lang',
      open: true,
      class: 'bg-white/10',
    },
  ],
});

const dropdownMenu = tv({
  base: 'flex absolute max-w-full text-white p-1.5 top-[46px] right-0 left-0 border border-t-0 dropdown-content',
  variants: {
    variant: {
      black: 'bg-zinc-900 border-White-opacity5',
      lang: 'bg-red-900 bg-theme-darkRed2 border border-theme-red dropdown-content',
    },
  },
});

const dropdownItem = tv({
  base: 'flex justify-center items-center cursor-pointer rounded',
  variants: {
    active: {
      true: '',
    },
  },
});
import React, { useEffect, useRef, useState } from 'react';
import { Icon } from './icon';
import { cn } from '../utils/cn';


type Option = {
  text?: string;
  img?: string;
};

type DropdownProps = {
  options: Option[];
  defaultValue?: Option;
  onChange?: (value: Option) => void;
  className?: string;
  variant?: 'black' | 'lang';
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  defaultValue,
  onChange,
  className,
  variant = 'black',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrent, setSelectedCurrent] = useState<Option>(defaultValue ?? options[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (current: Option) => {
    setSelectedCurrent(current);
    setIsOpen(false);
    onChange?.(current);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={cn(dropdown(), className)} data-component="dropdown" data-open={isOpen} ref={dropdownRef}>
      <button className={dropdownButton({ variant, open: isOpen })} onClick={toggleDropdown}>
        {selectedCurrent.img && (
          <img src={selectedCurrent.img} alt={selectedCurrent.text} className="h-5 mx-auto pl-1 border-l" />
        )}
        {selectedCurrent.text && <span className="px-1">{selectedCurrent.text}</span>}
        <Icon name="arrow"  size="xs" className="rotate-90 ml-auto text-xs" />
      </button>

      {isOpen && (
        <div className={dropdownMenu({ variant })}>
          <ul className="flex-1 p-1 space-y-1.5">
            {options.map((current, idx) => (
              <li
                key={idx}
                className={dropdownItem({
                  active: current.text === selectedCurrent.text,
                })}
                onClick={() => handleSelect(current)}
              >
                {current.img && (
                  <img src={current.img} alt={current.text} className="w-5 h-5 mx-auto" />
                )}
                {current.text && <span className="flex-1">{current.text}</span>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
