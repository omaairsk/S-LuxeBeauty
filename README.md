Here is a professional **README.md** file tailored for the S-Luxe Beauty code you provided.

---

# S-Luxe Beauty | Virtual Skin Analysis & Shop

**S-Luxe Beauty** is a front-end web application that leverages browser-based computer vision to analyze a user's skin tone in real-time and recommend matching beauty products. It features a modern, responsive design with a "Gold & Dark Grey" luxury aesthetic.

## 🚀 Features

* **Real-Time Skin Analysis:** Uses the device webcam to capture live video.
* **"AI" Tone Detection:** Algorithms analyze pixel data from the user's face to categorize skin tone as **Fair**, **Medium**, or **Dark**.
* **Dynamic Product Recommendations:** Automatically filters a simulated product database to show items matching the detected skin tone.
* **Budget Categorization:** Displays products tagged as "Cheap" or "Expensive" to suit different budgets.
* **Interactive UI:** Includes a review submission system, mirrored video feed, and responsive grid layout.
* **Privacy First:** All video processing happens locally in the browser via HTML5 Canvas; no images are sent to a server.

## 🛠️ Tech Stack

* **HTML5:** Semantic structure and Video/Canvas elements.
* **CSS3:** CSS Variables, Flexbox, CSS Grid, and responsive media queries.
* **JavaScript (Vanilla):**
* `Navigator.mediaDevices` API for webcam access.
* `CanvasRenderingContext2D` for pixel data extraction.
* DOM manipulation for dynamic product rendering.



## 📂 Project Structure

```text
/project-root
│
└── index.html      # Contains all HTML, CSS, and Logic (Single File)

```

## ⚙️ How to Run

Because this project uses the webcam API (`getUserMedia`), modern browsers require the site to be served via **HTTPS** or **localhost**. It may not work if you simply double-click the file (`file://` protocol).

### Method 1: VS Code Live Server (Recommended)

1. Open the folder in **Visual Studio Code**.
2. Install the **Live Server** extension.
3. Right-click `index.html` and select **"Open with Live Server"**.

### Method 2: Python Simple Server

If you have Python installed, run this command in the project directory:

```bash
# Python 3
python -m http.server 8000

```

Then open `http://localhost:8000` in your browser.

## 🧠 How the Detection Works

The application performs a lightweight analysis on the client side:

1. **Capture:** The `analyzeSkin()` function draws the current video frame onto a hidden HTML5 Canvas.
2. **Sample:** It extracts pixel data from a 50x50 square in the center of the frame (where the user's face should be).
3. **Calculate:** It calculates the average Red, Green, and Blue (RGB) values.
4. **Luminance Formula:** It converts the RGB values into a brightness score using the standard perception formula:


5. **Thresholding:**
* **Fair:** Brightness > 160
* **Dark:** Brightness < 100
* **Medium:** Between 100 and 160



## 📝 Usage Guide

1. **Grant Permissions:** When the page loads, allow the browser to access your camera.
2. **Align Face:** Position your face within the dashed oval guide on the screen.
3. **Analyze:** Click the **"✨ Analyze My Skin"** button.
4. **View Results:** The system will display your detected tone and populate the "Recommended For You" grid with specific products.
5. **Shop:** Click "Buy Now" on any product to visit the purchase link (simulated).

## 🛡️ Privacy Note

This application adheres to a strict privacy policy as noted in the footer:

> "Your video data is processed locally. We do NOT store or upload your images."

## 📄 License

This project is open-source and available for educational and personal use.