import { useRouter } from 'next/router';

type TGetUpdateSearchParams = (key: string, value: string) => void;
type TUseGetUpdateSearchParams = () => TGetUpdateSearchParams;

export const useGetUpdateSearchParams: TUseGetUpdateSearchParams = () => {
    const router = useRouter();
    const pathname = router.pathname;
    const searchParams = router.query;

    return (key, value) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const currentSearchParams = new URLSearchParams(searchParams);

        if (value === '') {
            currentSearchParams.delete(key);
        } else {
            currentSearchParams.set(key, value);
        }

        router.push(`${pathname}?${currentSearchParams.toString()}`, undefined, {
            shallow: true,
        });
    };
};
