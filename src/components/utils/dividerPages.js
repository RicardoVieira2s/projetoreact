import React from 'react'
import { COLOR_SHADOW_BLUE } from '../utils/color'
import { Divider } from '@mui/material'

export default function DividerPages() {
    return (
        <Divider
            variant="middle"
            sx={{
                marginBottom: '30px',
                '&.MuiDivider-root': {
                    backgroundColor: COLOR_SHADOW_BLUE,
                    height: '3px',
                    marginBottom: '16px',
                }
            }}
        />
    )
}