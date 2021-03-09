import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Channel_channel_shippingZones } from "@saleor/channels/types/Channel";
import DeletableItem from "@saleor/components/DeletableItem";
import React from "react";

const useStyles = makeStyles(
  theme => ({
    container: {
      paddingLeft: theme.spacing(3),
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }),
  { name: "ShippingZoneItem" }
);

interface ShippingZoneItemProps {
  zone: Channel_channel_shippingZones;
  onDelete: (id: string) => void;
}

const ShippingZoneItem: React.FC<ShippingZoneItemProps> = ({
  zone,
  onDelete
}) => {
  const { id, name } = zone;
  const classes = useStyles({});

  const handleDelete = () => onDelete(id);

  return (
    <div className={classes.container}>
      <Typography>{name}</Typography>
      <DeletableItem onDelete={handleDelete} />
    </div>
  );
};

export default ShippingZoneItem;