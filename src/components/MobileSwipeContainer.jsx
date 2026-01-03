import { useRef } from "react";

export default function MobileSwipeContainer({ active, setActive, children }) {
    const startX = useRef(0);

    const onTouchStart = (e) => {
        startX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e) => {
        const diff = startX.current - e.changedTouches[0].clientX;

        if (diff > 60 && active < children.length - 1) {
            setActive(active + 1);
        }
        if (diff < -60 && active > 0) {
            setActive(active - 1);
        }
    };

    return (
        <div
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className="pt-2 pb-16"
        >
            {children[active]}
        </div>
    );

}
