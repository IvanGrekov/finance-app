import { useRouter, usePathname, useSearchParams } from 'next/navigation';

type TGetUpdateSearchParams = (key: string, value: string) => void;
type TUseGetUpdateSearchParams = () => TGetUpdateSearchParams;

export const useGetUpdateSearchParams: TUseGetUpdateSearchParams = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    return (key, value) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const currentSearchParams = new URLSearchParams(searchParams);

        currentSearchParams.set(key, value);
        router.push(`${pathname}?${currentSearchParams.toString()}`);
    };
};
