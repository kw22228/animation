import { useState } from 'react';
import * as s from './LayoutAnimation.style';
import { AnimatePresence } from 'framer-motion';

const LayoutAnimation = () => {
    const [id, setId] = useState<null | string>(null);

    return (
        <s.Wrapper>
            {/* layout속성을 넣으면 이 컴포넌트의 css가 변경될시 애니메이션을 가짐 */}
            {/* <s.Box>
                <s.CircleChild layout />   
            </s.Box> */}
            {/* layoutId로 두개의 컴포넌트를 연결시킬수있음(shared latout). 
            연결된 컴포넌트는 변할때마다 애니메이션이 생김. */}
            {/* <s.Box>{!clicked && <s.CircleChild layoutId="child" />}</s.Box>
            <s.Box>{clicked && <s.BoxChild layoutId="child" />}</s.Box> */}
            <s.Grid>
                {[1, 2, 3, 4].map(box => (
                    <s.Box key={box} layoutId={String(box)} onClick={() => setId(String(box))} />
                ))}
            </s.Grid>
            <AnimatePresence>
                {id && (
                    <s.Overlay
                        initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                        animate={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
                        exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                        onClick={() => setId(null)}
                    >
                        <s.Box
                            style={{
                                width: 500,
                                height: 200,
                            }}
                            layoutId={id}
                            onClick={e => e.stopPropagation()}
                        />
                    </s.Overlay>
                )}
            </AnimatePresence>
        </s.Wrapper>
    );
};

export default LayoutAnimation;
