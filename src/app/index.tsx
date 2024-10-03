import { Lock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Tooltip } from '../components/ui/tooltip';

export default function App() {
    return (
        <>
            <div>Another Staging</div>
            <Tooltip message='Hello from tooltip'>
                <Button variant="outline" endContent={<Lock />}>
                    Button
                </Button>
            </Tooltip>
        </>
    );
}
