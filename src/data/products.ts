export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  features: string[];
  inStock: boolean;
  origins: string;
  specs: string[];
}

export const products: Product[] = [
  // Original 10 completed e-waste projects
  {
    id: 'autonomous-rover-v2',
    name: 'Autonomous Rover v2',
    description: 'ESP32-based robotic car built from reclaimed laptop fans, DVD drive motors, and repurposed aluminum. Features ultrasonic obstacle avoidance and Wi-Fi control.',
    price: 12500,
    category: 'Robotics',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
    features: ['ESP32-WROOM', 'Ultrasonic Sensors', 'L298N Motor Driver', 'Wi-Fi Control App'],
    inStock: true,
    origins: 'Chassis built from an old PC case. Drive motors salvaged from obsolete DVD writers. Wheels 3D printed using recycled PLA.',
    specs: ['Battery: 3S Li-ion (Salvaged)', 'Run time: 2 hours', 'Control Range: 50m']
  },
  {
    id: '3d-printing-pen',
    name: '3D Printing Pen',
    description: 'Built entirely from a salvaged DVD drive. Features a stepper motor filament feed, PID-controlled hot end, and extrudes PLA at 200°C.',
    price: 3500,
    category: 'Creative Tools',
    image: 'https://images.unsplash.com/photo-1620283085439-39620a1e21c4?q=80&w=1000&auto=format&fit=crop',
    features: ['Precision Stepper Motor', 'PID Temperature Control', 'Ergonomic Design', 'PLA Compatible'],
    inStock: true,
    origins: 'Stepper motor and rail mechanism extracted directly from a broken 16x DVD-RW drive.',
    specs: ['Power: 12V 3A', 'Nozzle: 0.4mm Brass', 'Filament: 1.75mm PLA']
  },
  {
    id: 'smart-home-hub',
    name: 'Smart Home Hub',
    description: 'Old router enclosure repurposed into a powerful ESP32-based home automation controller. Controls up to 8 relays with an MQTT dashboard and environment monitoring.',
    price: 8000,
    category: 'Home Automation',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop',
    features: ['8-Channel Relay', 'MQTT Integration', 'DHT11 Sensor', 'Web Interface'],
    inStock: true,
    origins: 'Enclosure from a dead Wi-Fi router. Internal power supply salvaged from an old set-top box.',
    specs: ['MCU: ESP32', 'Input: 220V AC', 'Output: 8x 10A Relays']
  },
  {
    id: 'solar-power-bank',
    name: 'Solar Power Bank 20Ah',
    description: 'Heavy-duty power bank utilizing reclaimed laptop 18650 cells in a 3S5P configuration. Includes an active BMS, solar charge controller, and dual USB + 12V output.',
    price: 5500,
    category: 'Power Solutions',
    image: 'https://images.unsplash.com/photo-1593344484962-796055d4a3a4?q=80&w=1000&auto=format&fit=crop',
    features: ['20Ah Capacity', 'Solar Ready', 'Active BMS Balancing', 'Dual USB Fast Charge'],
    inStock: true,
    origins: 'Contains 15 high-quality 18650 cells salvaged and capacity-tested from dead laptop battery packs.',
    specs: ['Capacity: 222Wh', 'Output: 12V 10A, 5V 3A', 'Charging: Solar / DC Adapter']
  },
  {
    id: 'led-matrix-display',
    name: 'LED Matrix Display',
    description: 'A 32x16 LED matrix driven by an ESP32, capable of scrolling text, displaying animations, and live weather data. Housed in a custom frame made from an e-waste PC case.',
    price: 4200,
    category: 'Art & Signage',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
    features: ['32x16 RGB Matrix', 'Wi-Fi Updates', 'Weather API', 'Custom Animations'],
    inStock: true,
    origins: 'The sleek brushed metal frame was cut and bent from a discarded Dell OptiPlex desktop chassis.',
    specs: ['Resolution: 32x16 px', 'Connectivity: Wi-Fi', 'Power: 5V 4A']
  },
  {
    id: 'portable-oscilloscope',
    name: 'Portable Oscilloscope',
    description: 'A functional single-channel portable oscilloscope built with an STM32 microcontroller and a salvaged TFT screen from a broken tablet.',
    price: 7800,
    category: 'Test Equipment',
    image: 'https://images.unsplash.com/photo-1620283085439-39620a1e21c4?q=80&w=1000&auto=format&fit=crop',
    features: ['1MHz Bandwidth', 'Battery Powered', 'TFT Touch Screen', 'Data Hold'],
    inStock: false,
    origins: 'Display salvaged from a bricked Android tablet. Internal battery from a dead smartphone.',
    specs: ['Bandwidth: 1MHz', 'Sampling: 2MSa/s', 'Screen: 4.3 inch TFT']
  },
  {
    id: 'cnc-pen-plotter',
    name: 'CNC Pen Plotter',
    description: 'A precision drawing machine built from two DVD drives acting as X/Y axes and a micro servo for pen lifting. Runs GRBL firmware and draws vector graphics.',
    price: 9500,
    category: 'Creative Tools',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop',
    features: ['GRBL Firmware', 'Sub-mm Precision', 'USB Control', 'Accepts Standard Pens'],
    inStock: true,
    origins: 'Mechanisms and stepper motors harvested from two broken CD/DVD drives. Base plate is scrap acrylic.',
    specs: ['Work Area: 40x40mm', 'Controller: Arduino Nano + L293D', 'Software: LaserGRBL/Inkscape']
  },
  {
    id: 'weather-station-node',
    name: 'Weather Station Node',
    description: 'Solar-powered, Wi-Fi connected environmental monitoring node. Tracks temperature, humidity, and air quality (AQI). Data dashboard displayed on an old repurposed tablet.',
    price: 6000,
    category: 'IoT',
    image: 'https://images.unsplash.com/photo-1593344484962-796055d4a3a4?q=80&w=1000&auto=format&fit=crop',
    features: ['BME280 Sensor', 'MQ-135 Gas Sensor', 'Solar Powered', 'ThingSpeak Integration'],
    inStock: true,
    origins: 'Solar panel salvaged from broken garden lights. Housing made from a repurposed plastic junction box.',
    specs: ['Sensors: Temp/Hum/Press/Gas', 'MCU: ESP8266', 'Update Rate: 5 mins']
  },
  {
    id: 'bluetooth-speaker-system',
    name: 'Bluetooth Speaker System',
    description: 'A punchy Bluetooth 5.0 speaker system built from salvaged car speaker drivers and a repurposed laptop amplifier board. Enclosed in polished pallet wood.',
    price: 4800,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
    features: ['Bluetooth 5.0', '20W RMS Output', 'Rechargeable', 'Vintage Wooden Look'],
    inStock: true,
    origins: 'Drivers pulled from a scrapped Honda Civic. Amp chip recovered from a broken laptop motherboard.',
    specs: ['Power: 20W RMS', 'Battery: 12 hours', 'Inputs: BT/AUX']
  },
  {
    id: 'line-following-robot',
    name: 'Line Following Robot Kit',
    description: 'The classic STEM project. Uses an IR sensor array and Arduino Nano to follow complex paths. Assembled using recycled DC motors and a custom e-waste chassis.',
    price: 3800,
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1620283085439-39620a1e21c4?q=80&w=1000&auto=format&fit=crop',
    features: ['5-Channel IR Array', 'PID Control Algorithm', 'Arduino Nano', 'Open Source Code'],
    inStock: true,
    origins: 'Motors and gears salvaged from broken mechanical toys and printers. Chassis cut from scrap PCB material.',
    specs: ['MCU: Arduino Nano', 'Sensors: TCRT5000 x5', 'Power: 9V or 2x 18650']
  },

  // 8 University/Student Focused Projects
  {
    id: 'robotic-arm-5dof',
    name: '5-DOF Robotic Arm',
    description: 'A 5-degree-of-freedom robotic arm controlled by Arduino. Perfect for university kinematics assignments. Built using heavy-duty servos and recycled aluminum brackets.',
    price: 8500,
    category: 'University Projects',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop',
    features: ['5 Axes of Motion', 'Gripper End Effector', 'Potentiometer Control', 'Record & Playback'],
    inStock: true,
    origins: 'Structural brackets formed from discarded server rack rails. Base made from a scrapped hard drive platter.',
    specs: ['MCU: Arduino Mega', 'Actuators: 5x MG996R Servos', 'Reach: 30cm']
  },
  {
    id: 'smart-elevator-model',
    name: 'Smart Elevator Prototype',
    description: 'A working 4-floor elevator model demonstrating real-world logic (call queues, door sensors, floor tracking). Built for embedded systems coursework.',
    price: 6500,
    category: 'University Projects',
    image: 'https://images.unsplash.com/photo-1593344484962-796055d4a3a4?q=80&w=1000&auto=format&fit=crop',
    features: ['Floor Call Buttons', 'IR Door Sensors', 'Stepper Motor Hoist', 'Seven-Segment Display'],
    inStock: true,
    origins: 'Stepper motor and belt drive salvaged from an old flatbed scanner. Frame built from scrap extruded aluminum.',
    specs: ['MCU: Arduino Uno', 'Levels: 4', 'Height: 60cm']
  },
  {
    id: 'mini-escalator-system',
    name: 'Mini Escalator System',
    description: 'A motorized continuous escalator model. Demonstrates mechanical linkages, motor gearing, and automated start/stop using proximity sensors.',
    price: 7200,
    category: 'University Projects',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
    features: ['Continuous Track', 'IR Proximity Start', 'Geared DC Motor', 'Adjustable Speed'],
    inStock: false,
    origins: 'Drive gears and chain mechanism rescued from a broken paper shredder.',
    specs: ['Power: 12V DC', 'Sensors: IR Obstacle', 'Material: Acrylic & Scrap Metal']
  },
  {
    id: 'rfid-attendance-system',
    name: 'RFID Smart Attendance System',
    description: 'A complete access control and attendance logging system. Scans RFID cards, logs data to an SD card, and updates a Google Sheet via ESP8266.',
    price: 4500,
    category: 'University Projects',
    image: 'https://images.unsplash.com/photo-1620283085439-39620a1e21c4?q=80&w=1000&auto=format&fit=crop',
    features: ['RC522 RFID Reader', 'OLED Display', 'SD Card Logging', 'Wi-Fi Syncing'],
    inStock: true,
    origins: 'Housed in a repurposed intercom box. Includes a buzzer salvaged from a dead PC motherboard.',
    specs: ['MCU: NodeMCU', 'Frequency: 13.56MHz', 'Display: 0.96" OLED']
  },
  {
    id: 'bionic-robot-hand',
    name: 'Animatronic Bionic Hand',
    description: 'A 3D-printed bionic hand that mimics human finger movements using a flex-sensor glove. A complex university project demonstrating human-machine interfacing.',
    price: 11000,
    category: 'University Projects',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop',
    features: ['5 Independent Fingers', 'Flex Sensor Control Glove', 'Tendon Routing', 'Proportional Control'],
    inStock: true,
    origins: 'Control glove made from a recycled work glove. Servo housing built from scrap PVC piping.',
    specs: ['Sensors: 5x Flex Sensors', 'Actuators: 5x SG90 Micro Servos', 'Comms: Wireless NRF24L01']
  },
  {
    id: 'maze-solving-micromouse',
    name: 'Maze Solving MicroMouse',
    description: 'An advanced robotics platform designed to solve physical mazes using the Flood Fill algorithm. Essential for AI and advanced robotics students.',
    price: 9800,
    category: 'University Projects',
    image: 'https://images.unsplash.com/photo-1593344484962-796055d4a3a4?q=80&w=1000&auto=format&fit=crop',
    features: ['Flood Fill Algorithm', 'Optical Encoders', '6x IR Distance Sensors', 'Differential Drive'],
    inStock: true,
    origins: 'Optical encoders harvested from old ball-mice. High-speed motors pulled from broken drone gimbals.',
    specs: ['MCU: STM32', 'Speed: 1.5 m/s', 'Algorithm: Flood Fill / Wall Hugger']
  },
  {
    id: 'auto-plant-watering',
    name: 'Smart Agriculture System',
    description: 'An automated hydroponics/soil watering system. Monitors soil moisture, humidity, and light, triggering water pumps automatically. Logs data to the cloud.',
    price: 5200,
    category: 'University Projects',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
    features: ['Capacitive Soil Sensor', 'Submersible Pump', 'IoT Dashboard', 'Water Level Alert'],
    inStock: true,
    origins: 'Water pump salvaged from a broken coffee machine. Reservoir made from a recycled water cooler bottle.',
    specs: ['MCU: ESP32', 'Sensors: Moisture/Temp/LDR', 'Pump: 12V DC']
  },
  {
    id: 'radar-mapping-system',
    name: 'Ultrasonic Radar Mapping System',
    description: 'A rotating ultrasonic sensor that sweeps 180 degrees, sending distance data to a PC via serial to draw a real-time radar map using Processing.',
    price: 4000,
    category: 'University Projects',
    image: 'https://images.unsplash.com/photo-1620283085439-39620a1e21c4?q=80&w=1000&auto=format&fit=crop',
    features: ['180-Degree Sweep', 'Real-time PC Mapping', 'Arduino + Processing', 'High Accuracy'],
    inStock: true,
    origins: 'Stepper motor and mount repurposed from an old security camera PTZ mechanism.',
    specs: ['MCU: Arduino Uno', 'Sensor: HC-SR04', 'Sweep Range: 10cm - 200cm']
  }
];
