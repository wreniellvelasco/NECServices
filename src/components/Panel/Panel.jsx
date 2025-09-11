import { useTheme, Box } from "@mui/material";
import { tokens } from "../../theme";
import { BoxShadowStyle } from "../styles/BoxShadows";




const Panel = ({ id, className, key, children, sx = {} ,pt = 2, pb= 2, pr = 2, pl = 2, mt = 2,mb = 2 ,mr = 2,ml = 2, borderRadius = "4px"}) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    

    let mySX = {...sx,
        backgroundColor: `${theme.palette.mode === 'dark' ? colors.primary[400] : 'white'} !important`,
        boxShadow: BoxShadowStyle[1],
        borderRadius: borderRadius,
        pt : pt,
        pb : pb,
        pr : pr,
        pl:pl,
        mt:mt,
        mb:mb,
        mr:mr,
        ml:ml
    };

    return <Box
        id={id}
        className={className}
        key={key}
        sx={mySX}
    >
        {children}
    </Box>

}


export default Panel;