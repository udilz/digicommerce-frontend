import { tv, VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import React from 'react';

const inputStyle = tv({
    base: 'border px-3 py-2 font-medium placeholder:font-normal placeholder:text-secondary-200 transition duration-200',
    variants: {
        size: {
            small: 'text-sm px-2 py-1 rounded-md',
            medium: 'text-base px-4 py-2 rounded-lg',
            large: 'text-lg px-6 py-3 rounded-xl',
        },
        withIcon: {
            true: 'pl-12 pr-4',
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'medium',
        withIcon: false,
    },
});

type TInput = VariantProps<typeof inputStyle>;
interface InputProps extends TInput, Omit<React.ComponentPropsWithRef<'input'>, 'size'> {
    icon?: React.ReactNode;
}

export const Input = (props: InputProps) => {
    return (
        <div className="relative flex p-2">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300">{props.icon}</div>
            <input {...props} size={undefined} className={twMerge(inputStyle({ ...props }), props.className)} />;
        </div>
    );
};
