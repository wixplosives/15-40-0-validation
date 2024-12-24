import { createBoard, Variant } from '@wixc3/react-board';
import { Avatar } from '../../../src/components/avatar/avatar';

export default createBoard({
    name: 'Avatar',
    Board: () => (
        <Variant name="home">
            <Avatar />
        </Variant>
    ),
    isSnippet: true,
});
