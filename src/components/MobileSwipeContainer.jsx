import { useRef } from "react";

export default function MobileSwipeContainer({ active, setActive, children }) {
  const startX = useRef(0);
  const startY = useRef(0);
  const allowSwipe = useRef(true);
  const isHorizontal = useRef(false);

  const onTouchStart = (e) => {
    // HARD LOCK: if touch starts in no-swipe zone
    if (e.target.closest("[data-no-swipe]")) {
      allowSwipe.current = false;
      return;
    }

    allowSwipe.current = true;
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
    isHorizontal.current = false;
  };

  const onTouchMove = (e) => {
    if (!allowSwipe.current) return;

    const dx = Math.abs(e.touches[0].clientX - startX.current);
    const dy = Math.abs(e.touches[0].clientY - startY.current);

    // Deciding swipe direction once
    if (!isHorizontal.current && dx > dy && dx > 12) {
      isHorizontal.current = true;
    }
  };

  const onTouchEnd = (e) => {
    if (!allowSwipe.current) return;
    if (!isHorizontal.current) return;

    const diffX = startX.current - e.changedTouches[0].clientX;

    if (diffX > 70 && active < children.length - 1) {
      setActive(active + 1);
    } else if (diffX < -70 && active > 0) {
      setActive(active - 1);
    }
  };

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className="pt-2 pb-16 touch-pan-y"
    >
      {children[active]}
    </div>
  );
}
