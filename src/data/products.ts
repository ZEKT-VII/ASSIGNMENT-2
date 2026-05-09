export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  features: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 'esp32-smarthome',
    name: 'ESP32 Smart Home Controller',
    description: 'A robust, Wi-Fi enabled embedded system designed for home automation. Control up to 8 relays with custom firmware.',
    price: 4500,
    category: 'Embedded Systems',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
    features: ['ESP32-WROOM-32D', '8x 5V Relays', 'Web Interface', 'MQTT Support'],
    inStock: true
  },
  {
    id: 'bms-4s-100a',
    name: '4S 100A Lifepo4 BMS',
    description: 'High-power Battery Management System for 12V Lithium Iron Phosphate battery packs. Includes active balancing.',
    price: 3200,
    category: 'Power Solutions',
    image: 'https://images.unsplash.com/photo-1620283085439-39620a1e21c4?q=80&w=1000&auto=format&fit=crop',
    features: ['100A Continuous Discharge', 'Active Balancing', 'Temperature Sensor', 'Overcharge Protection'],
    inStock: true
  },
  {
    id: 'custom-drone-fc',
    name: 'Custom Drone Flight Controller',
    description: 'STM32-based flight controller for FPV drones and autonomous aerial vehicles. Features dual gyros for redundancy.',
    price: 8500,
    category: 'Robotics',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop',
    features: ['STM32F405 MCU', 'Dual MPU6000', 'OSD Support', '6 UARTs'],
    inStock: false
  },
  {
    id: 'iot-weather-station',
    name: 'IoT Weather Station Node',
    description: 'Solar-powered environmental monitoring node. Measures temperature, humidity, air quality (AQI), and barometric pressure.',
    price: 6000,
    category: 'IoT',
    image: 'https://images.unsplash.com/photo-1593344484962-796055d4a3a4?q=80&w=1000&auto=format&fit=crop',
    features: ['BME280 Sensor', 'MQ-135 Gas Sensor', 'Solar Charge Controller', 'LoRa/Wi-Fi'],
    inStock: true
  }
];
