import { Box, Button } from '@mui/material'
import React, {useRef} from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

export const FileUploader = ({onFileSelect}: any) => {
    const fileInput = useRef<HTMLInputElement>(null)

    const handleFileInput = (e: any) => {
        onFileSelect(e.target.files[0])
    }

    return (
        <>
          <Box>
            <Button
              variant="outlined"
              component="label"
              startIcon={<CloudUploadIcon />}
              onClick={e => fileInput.current && fileInput.current.click()}
            >
              Upload Stock
              <input
                onChange={handleFileInput}
                hidden
                accept=".LOADED"
                type="file"
              />
            </Button>
          </Box>
        </>
    )
}
