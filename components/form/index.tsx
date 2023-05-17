import React from 'react';
import {
    Controller,
    ControllerProps,
    FormProvider,
    SubmitHandler,
    useForm,
    useFormContext,
    UseFormProps,
    UseFormReturn,
    UseFormSetValue,
    FieldValues,
} from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { AnyObjectSchema } from 'yup';

export type TUseWFromProps<T extends FieldValues> = UseFormProps<T> & {
    validation?: AnyObjectSchema;
};

export type TUseFormReturn<T extends FieldValues> = UseFormReturn<T>;

export function useWForm<T extends FieldValues>({
    validation,
    ...rest
}: TUseWFromProps<T>): TUseFormReturn<T> {
    return useForm<T>({
        resolver: validation ? yupResolver(validation) : undefined,
        ...rest,
    });
}

export interface IFormProps<T extends FieldValues> {
    id: string;
    onSubmit: SubmitHandler<T>;
    methods: TUseFormReturn<T>;
    children: React.ReactNode;
    onBlur?: () => void;
}

export function WForm<T extends FieldValues>({
    id,
    onSubmit,
    methods,
    children,
    onBlur,
}: IFormProps<T>): JSX.Element {
    const { handleSubmit } = methods;

    return (
        <FormProvider {...methods}>
            <form id={id} onBlur={onBlur} onSubmit={handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    );
}

export type useWFormSetValue<T extends FieldValues> = UseFormSetValue<T>;

export const useWFormContext = useFormContext;

export type WFormControllerProps = ControllerProps;

export const WFormController = (props: WFormControllerProps): JSX.Element => (
    <Controller {...props} />
);
