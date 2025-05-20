import React from "react";
import { Dialog, DialogContent, DialogActions, Button, Typography, Box } from "@mui/material";
import ReactMarkdown from "react-markdown";

interface ReadmeModalProps {
  open: boolean;
  onClose: () => void;
  readmeContent: string;
}

const ReadmeModal: React.FC<ReadmeModalProps> = ({
  open,
  onClose,
  readmeContent,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogContent>
        <ReactMarkdown
          components={{
            h1: ({node, ...props}) => <Typography variant="h4" gutterBottom {...props} />,
            h2: ({node, ...props}) => <Typography variant="h5" gutterBottom {...props} />,
            h3: ({node, ...props}) => <Typography variant="h6" gutterBottom {...props} />,
            p: ({node, ...props}) => <Typography variant="body1" {...props} />,
            li: ({node, ...props}) => <li><Typography variant="body1" component="span" {...props} /></li>,
            code: ({node, ...props}) => (
              <Box component="code" sx={{ backgroundColor: "#f5f5f5", padding: "0.2em 0.4em", borderRadius: "4px", fontFamily: "monospace" }} {...props} />
            ),
            pre: ({node, ...props}) => (
              <Box component="pre" sx={{ backgroundColor: "#f5f5f5", padding: 2, borderRadius: "4px", overflowX: "auto" }} {...props} />
            )
          }}
        >
          {readmeContent}
        </ReactMarkdown>
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
