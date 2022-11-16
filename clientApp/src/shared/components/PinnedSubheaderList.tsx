import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

export interface  ISubHeaderProps {
    title: string
    subList: string[];
}
export interface ISubHeaderListProps {
    subHeaders: ISubHeaderProps[];
}
export default function PinnedSubheaderList(props : ISubHeaderListProps) {

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 400,
        overflow: 'auto',
        position: 'relative',
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      { 
        props.subHeaders.map((section) => (
          <li key={`section-${section.title}`}>
            <ul>
              <ListSubheader>{section.title}</ListSubheader>
              {section.subList.map((item, index) => (
                <ListItem key={`item-${section.title}-${index}`}>
                  <ListItemText primary={`${item}`} />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
    </List>
  );
}