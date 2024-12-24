import { createBoard, Variant } from '@wixc3/react-board';
import { Button } from '../../../src/components/button/button';

export default createBoard({
    name: 'Button',
    Board: () => (
        <Variant name="primary">
            <Button />
        </Variant>
    ),
    isSnippet: true,
});
