import React from 'react';
import { Dialog, DialogContent, DialogActions, Button } from '@mui/material';
import ReactMarkdown from 'react-markdown';

interface ReadmeModalProps {
    open: boolean;
    onClose: () => void;
    readmeContent: string;
}

const ReadmeModal: React.FC<ReadmeModalProps> = ({ open, onClose, readmeContent }) => {
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
            <DialogContent>
                <ReactMarkdown>{readmeContent}</ReactMarkdown>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ReadmeModal;