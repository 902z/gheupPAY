import { ReactNode, useEffect, useRef } from "react";

interface Props {
  onImpression: () => void;
  children: ReactNode;
}

/**
 * @author 이승현
 * @param onImpression 감지되면 실행할 함수
 * @param children 감지할 영역
 *
 * 인피니티 스크롤을 사용할 수 있는 컴포넌트입니다. 조금이라도 보이면 onImpression 함수를 실행합니다.
 */
export function IntersectionArea({ onImpression, children }: Props) {
  const targetRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onImpression();
        }
      },
      { threshold: 0 },
    );
    const currentRef = targetRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [onImpression, targetRef]);

  return <div ref={targetRef}>{children}</div>;
}
