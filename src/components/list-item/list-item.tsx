import { Delete, Folder } from '@mui/icons-material';
import { ListItem, IconButton, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { PropsTodoItem } from '../../types';


function TodoItem ({item} : PropsTodoItem ) : JSX.Element {
  const {id,description,title} = item;

  return (
    <ListItem
      key={id}
      secondaryAction={
        <IconButton
          data-id={id}
          edge="end" aria-label="delete"
        >
          <Delete />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <Folder />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={description ? description : ''}
      />
    </ListItem>
  );
}

export default TodoItem;
