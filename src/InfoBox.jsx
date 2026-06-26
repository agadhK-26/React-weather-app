import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import CompressIcon from "@mui/icons-material/Compress";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloudIcon from "@mui/icons-material/Cloud";

export default function InfoBox({ info }) {
  if (!info) return null;

  return (
    <Card sx={{ maxWidth: 450, margin: "20px auto", padding: 1 }}>
      <CardContent>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <LocationOnIcon color="error" />
          {info.city}, {info.country}
        </Typography>

        <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <ThermostatIcon color="primary" />
          Temperature: {info.temp} °C
        </Typography>

        <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <ThermostatIcon color="warning" />
          Feels Like: {info.feelsLike} °C
        </Typography>

        <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <ThermostatIcon color="error" />
          Max Temperature: {info.tempMax} °C
        </Typography>

        <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <ThermostatIcon color="info" />
          Min Temperature: {info.tempMin} °C
        </Typography>

        <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <WaterDropIcon color="primary" />
          Humidity: {info.humidity}%
        </Typography>

        <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <AirIcon color="success" />
          Wind Speed: {info.windSpeed} m/s
        </Typography>

        <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CompressIcon color="action" />
          Pressure: {info.pressure} hPa
        </Typography>

        <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <VisibilityIcon color="secondary" />
          Visibility: {info.visibility} m
        </Typography>

        <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CloudIcon color="disabled" />
          Weather: {info.weather}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {info.description}
        </Typography>
      </CardContent>
    </Card>
  );
}