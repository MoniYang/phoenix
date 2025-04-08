
import { clsx } from 'clsx';
import {cn} from '../utils/cn';
import { footerItems } from '../constants/footer-menu'

const Footer: React.FC = () => {
    return (
      <footer className="flex flex-none bg-theme-darkRed2 h-[60px] px-4 py-2 fixed left-0 right-0 bottom-0 z-10">
        {footerItems.map((item, index) => (
          <div
            key={index}
            className={clsx(
              'flex flex-1 flex-col justify-center items-center text-White-opacity3 text-xs relative cursor-pointer appItem',
              { 'data-selected': item.selected }
            )}
            onClick={item.onclick}
          >
            <i
              className={clsx(
                `icon-${item.icon} mb-1`,
                item.promo &&
                  'before:w-[30px] before:h-[30px] bg-theme-red rounded-full p-2 border-[5px] border-black absolute top-[-30px]'
              )}
            ></i>
            <span className={cn(`text-white`,item.promo ? 'mt-auto' : '')}>{item.text}</span>
          </div>
        ))}
      </footer>
    );
  };
  
  export default Footer;