## Live Link: https://pc-builder-ecru.vercel.app

## Products: https://pc-builder-ecru.vercel.app/api/products

## Features of this website

This is a clean and straightforward PC Builder website for PC parts and components using Next.js. The website includes PC Builder tool where users can add selected PC components to build their own PC.

In home page of this website contain a Navbar ,Banner, Featured Products section, Featured Categories section, and a footer with SSG implementation. Navbar contain a Pc-builder button that redirects user to pc-builder page to build their own pc.
The navbar also have a Categories dropdown with the following categories:
CPU / Processor
Motherboard
RAM
Power Supply Unit
Storage Device
Monitor
Others
Each category has its corresponding route with SSG implementation.

Featured Products section shows 6 random PC components

Each Featured product card displays the following properties:
Image
Product Name
Category
Price
Status ( In Stock | Out of stock)
Rating (Out of 5 Stars)
By Clicking on Each featured product will take the user to the product detail page.
The Featured Categories section contain 7 categories which are:
CPU / Processor
Motherboard
RAM
Power Supply Unit
Storage Device
Monitor
Others (GPU, Mouse, Keyboard, etc…)
Clicking on any of the Featured Categories will redirect the user to another page where products of that category will be displayed.By Clicking on Each product on this page will also take the user to the product detail page.

The PC Builder page has a category sections with above 7 categories.
Each category has a Choose Button. Clicking on the Choose Button take the user to another page where product of that specific category will be displayed.
Each product card on that page has an Add To Builder Button. Clicking on this button will redirect the user to the PC Builder page, and it will update the state of that selected category section in the PC Builder Page with the selected component below.
After adding at least 5 - 6 products, the user will be able to click on the Complete Build button on pc-builder page.Clicking on the Complete Build button will show a success alert.The PC Builder Page is protected route .

The entire application is responsive for both mobile and desktop devices to ensure an enjoyable user experience across all devices.

//In Development environment:
The application will run by command:

```
npm run dev
```
