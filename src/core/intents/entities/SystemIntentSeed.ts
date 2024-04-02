import { MessageChannel } from './MessageChannel.Type';

export const seedSystemIntents = [
  {
    intent: 'Request for Order Status',
    intentDescription:
      'Inquiries about the current status of an order, including delivery tracking and estimated arrival times.',
    responses: [
      {
        channel: MessageChannel.Email,
        response:
          "Hey {{sender_username}}, we''re here to help! 💳 For payment-related inquiries, please ensure that your payment method is up to date. If you encounter any issues, don''t hesitate to contact us for assistance.",
        isActive: true,
      },
      {
        channel: MessageChannel.Facebook,
        response:
          "Hey {{sender_username}}, thanks for reaching out! 💰If you''re experiencing any payment issues, please check your payment details and try again. If the problem persists, feel free to send us a message, and we''ll be happy to help.",
        isActive: true,
      },
      {
        channel: MessageChannel.Instagram,
        response:
          "Hey {{sender_username}}, we understand the importance of smooth payments! 💳 Please double-check your payment details and try again. If you need further assistance, don''t hesitate to reach out to us.",
        isActive: true,
      },
      {
        channel: MessageChannel.WhatsApp,
        response:
          "Hey {{sender_username}}, for any payment-related concerns, please ensure that your payment method is set up correctly. If you need assistance or encounter any issues, feel free to contact us. We''re here to help! 💳",
        isActive: true,
      },
    ],
  },
  {
    intent: 'Request for Order Cancellation',
    intentDescription:
      'Request to cancel an order placed and inquire about the process and implications of cancelling their order.',
    responses: [
      {
        channel: MessageChannel.Email,
        response:
          "Hey {{sender_username}}, if you'd like to cancel your order, please provide us with your order number, and we'll assist you with the cancellation process.",
        isActive: true,
      },
      {
        channel: MessageChannel.Facebook,
        response:
          "Hey {{sender_username}}, if you need to cancel your order, please provide us with your order number, and we'll guide you through the cancellation process.",
        isActive: true,
      },
      {
        channel: MessageChannel.Instagram,
        response:
          "Hey {{sender_username}}, we're here to help! If you wish to cancel your order, please provide us with your order number, and we'll assist you with the cancellation process.",
        isActive: true,
      },
      {
        channel: MessageChannel.WhatsApp,
        response:
          "Hey {{sender_username}}, if you need to cancel your order, please provide us with your order number, and we'll help you with the cancellation process.",
        isActive: true,
      },
    ],
  },
  {
    intent: 'Request for Order Modification',
    intentDescription:
      'Questions ore requests related to modifying an order they have placed, such as changing the quantity or color of an item, and inquire about the process and feasibility of making changes to their order.',
    responses: [
      {
        channel: MessageChannel.Email,
        response:
          "Hey {{sender_username}}, if you'd like to modify your order, please provide us with your order number, and we'll assist you in making the necessary changes.",
        isActive: true,
      },
      {
        channel: MessageChannel.Facebook,
        response:
          "Hey {{sender_username}}, if you need to make changes to your order, please provide us with your order number, and we'll guide you through the modification process.",
        isActive: true,
      },
      {
        channel: MessageChannel.Instagram,
        response:
          "Hey {{sender_username}}, we're here to help! If you wish to modify your order, please provide us with your order number, and we'll assist you with making the necessary changes.",
        isActive: true,
      },
      {
        channel: MessageChannel.WhatsApp,
        response:
          "Hey {{sender_username}}, if you need to modify your order, please provide us with your order number, and we'll help you make the necessary changes.",
        isActive: true,
      },
    ],
  },
  {
    intent: 'Request for Product Information',
    intentDescription:
      'Questions regarding product details, specifications, availability, or compatibility.',
    responses: [
      {
        channel: MessageChannel.Email,
        response:
          "Hey {{sender_username}}, thanks for your interest! The product you're inquiring about is available in multiple colors and sizes. Additionally, it features high-quality materials and is designed for durability. If you have any specific questions or need further information, feel free to ask!",
        isActive: true,
      },
      {
        channel: MessageChannel.Facebook,
        response:
          "Hey {{sender_username}}, we're thrilled you're interested in our products! Yes, the product you're asking about is available in various colors and sizes. It's crafted with premium materials to ensure both style and durability. Let us know if you'd like more details or have any other questions!",
        isActive: true,
      },
      {
        channel: MessageChannel.Instagram,
        response:
          "Hey {{sender_username}}, thanks for reaching out! The product you're interested in comes in different colors and sizes to suit your preferences. It's designed with quality in mind, ensuring both functionality and style. If you need more information or have any other inquiries, feel free to ask!",
        isActive: true,
      },
      {
        channel: MessageChannel.WhatsApp,
        response:
          "Hey {{sender_username}}, we're here to help! Yes, the product you're inquiring about is available in various colors and sizes. It's carefully crafted with premium materials to ensure durability and style. If you have any specific questions or need further details, don't hesitate to ask!",
        isActive: true,
      },
    ],
  },
  {
    intent: 'Request for Product Customization',
    intentDescription:
      'Questions or requests related to  customizing a product according to their specific preferences or requirements, such as engraving initials on jewelry or choosing specific features for electronic devices.',
    responses: [
      {
        channel: MessageChannel.Email,
        response:
          "Hey {{sender_username}}, thanks for your interest in customization! We offer various customization options for our products, including engraving, color options, and more. Let us know your preferences, and we'll work with you to create a personalized product.",
        isActive: true,
      },
      {
        channel: MessageChannel.Facebook,
        response:
          "Hey {{sender_username}}, we're excited that you're interested in customization! Our products can be tailored to your preferences with options such as engraving, color choices, and more. Feel free to let us know how you'd like to personalize your item!",
        isActive: true,
      },
      {
        channel: MessageChannel.Instagram,
        response:
          "Hey {{sender_username}}, thanks for reaching out! We offer customization options for our products, allowing you to personalize them according to your preferences. Whether it's engraving, color selection, or other features, we're here to make your product unique to you. Let us know how we can assist you!",
        isActive: true,
      },
      {
        channel: MessageChannel.WhatsApp,
        response:
          "Hey {{sender_username}}, we're here to help you customize your product! Our customization options include engraving, color choices, and more. Let us know what personalization you have in mind, and we'll make it happen for you!",
        isActive: true,
      },
    ],
  },
  {
    intent: 'Request for Product Recommendations',
    intentDescription:
      'Queries or requests related suggestions or recommendations for products based on their preferences, interests, or previous purchases.',
    responses: [
      {
        channel: MessageChannel.Email,
        response:
          "Hey {{sender_username}}, we're glad you're looking for recommendations! Based on your preferences and previous purchases, we suggest the following products: [List of recommended products]. Let us know if you'd like more information or have any specific requirements!",
        isActive: true,
      },
      {
        channel: MessageChannel.Facebook,
        response:
          "Hey {{sender_username}}, we're excited to help you discover new products! Here are some recommendations based on your interests and shopping history: [List of recommended products]. Feel free to explore them and let us know if you need further assistance!",
        isActive: true,
      },
      {
        channel: MessageChannel.Instagram,
        response:
          'Hey {{sender_username}}, thanks for reaching out! We have some great recommendations for you based on your preferences and browsing history: [List of recommended products]. Check them out and let us know if you have any questions!',
        isActive: true,
      },
      {
        channel: MessageChannel.WhatsApp,
        response:
          "Hey {{sender_username}}, we're here to assist you with product recommendations! Based on your preferences, here are some products we think you'll love: [List of recommended products]. Feel free to explore them and reach out to us if you need more information!",
        isActive: true,
      },
    ],
  },
  {
    intent: 'Request for Payments',
    intentDescription: 'Queries related to making payments, payment methods.',
    responses: [
      {
        channel: MessageChannel.Email,
        response:
          'Hey {{sender_username}}, we offer various payment methods to make your shopping experience convenient! 💳 Our available payment options include credit/debit card, PayPal, and bank transfer. Let us know if you need assistance with choosing a payment method or have any questions!',
        isActive: true,
      },
      {
        channel: MessageChannel.Facebook,
        response:
          'Hey {{sender_username}}, thanks for your interest! 💰 Our accepted payment methods include credit/debit card, PayPal, and bank transfer. If you have any questions about our payment options or need assistance, feel free to ask!',
        isActive: true,
      },
      {
        channel: MessageChannel.Instagram,
        response:
          "Hey {{sender_username}}, we're here to help you with payments! 💳 Our accepted payment methods include credit/debit card, PayPal, and bank transfer. Let us know if you need more information or have any questions about our payment options.",
        isActive: true,
      },
      {
        channel: MessageChannel.WhatsApp,
        response:
          "Hey {{sender_username}}, we offer a variety of payment methods to suit your needs! 💳 Our accepted payment options include credit/debit card, PayPal, and bank transfer. Feel free to choose the method that works best for you. If you need assistance, we're here to help!",
        isActive: true,
      },
    ],
  },
  {
    intent: 'Request for Payment Issues',
    intentDescription: 'Queries related to billing issues, or transaction problems.',
    responses: [
      {
        channel: MessageChannel.Email,
        response:
          "Hey {{sender_username}}, we understand the importance of smooth payments! 💳 If you're experiencing any issues with your payment, please provide us with details about the problem, and we'll assist you in resolving it as soon as possible.",
        isActive: true,
      },
      {
        channel: MessageChannel.Facebook,
        response:
          "Hey {{sender_username}}, thanks for reaching out! 💰 If you're facing any issues with your payment, please let us know the specifics so we can help you resolve the problem. We're here to ensure a seamless payment experience for you.",
        isActive: true,
      },
      {
        channel: MessageChannel.Instagram,
        response:
          "Hey {{sender_username}}, we're here to assist you with any payment issues you may be experiencing! 💳 Please provide us with more information about the problem, and we'll work on resolving it for you promptly.",
        isActive: true,
      },
      {
        channel: MessageChannel.WhatsApp,
        response:
          "Hey {{sender_username}}, if you're having any payment issues, please don't hesitate to reach out to us! 💳 Please provide us with details about the problem, and we'll do our best to assist you and ensure a smooth payment process.",
        isActive: true,
      },
    ],
  },
  {
    intent: 'Request for Returns and Refunds',
    intentDescription:
      'Requests or questions about returning a product, including return policies, refunds and procedures.',
    responses: [
      {
        channel: MessageChannel.Email,
        response:
          "Hey {{sender_username}}, we understand that returns and refunds are important! 🛍️ If you'd like to initiate a return or refund, please provide us with your order number and details about the item(s) you wish to return. We'll guide you through the process and ensure a smooth experience.",
        isActive: true,
      },
      {
        channel: MessageChannel.Facebook,
        response:
          "Hey {{sender_username}}, thanks for reaching out! 🔄 If you need to return or refund an item, please provide us with your order number and details about the product(s) you wish to return. We'll assist you with the process and ensure everything is taken care of.",
        isActive: true,
      },
      {
        channel: MessageChannel.Instagram,
        response:
          "Hey {{sender_username}}, we're here to help with returns and refunds! 🛍️ Please provide us with your order number and information about the item(s) you'd like to return. We'll provide you with instructions on how to proceed and assist you throughout the process.",
        isActive: true,
      },
      {
        channel: MessageChannel.WhatsApp,
        response:
          "Hey {{sender_username}}, if you need to return or refund an item, we're here to assist you! 🔄 Please provide us with your order number and details about the product(s) you wish to return. We'll guide you through the process and ensure a hassle-free experience.",
        isActive: true,
      },
    ],
  },
  {
    intent: 'Request for Feedback',
    intentDescription:
      'User comments, reviews, or general feedback about products, services, or experiences.',
    responses: [
      {
        channel: MessageChannel.Email,
        response:
          'Hey {{sender_username}}, we value your feedback! 🌟 If you have any comments, reviews, or suggestions about our products or services, please feel free to share them with us. Your feedback helps us improve and provide better experiences for you.',
        isActive: true,
      },
      {
        channel: MessageChannel.Facebook,
        response:
          "Hey {{sender_username}}, thanks for reaching out! We'd love to hear your feedback! 🌟 Feel free to share any comments, reviews, or suggestions you have about our products or services. Your feedback is important to us!",
        isActive: true,
      },
      {
        channel: MessageChannel.Instagram,
        response:
          'Hey {{sender_username}}, your feedback is valuable to us! 🌟 If you have any comments, reviews, or suggestions about our products or services, please share them with us. We appreciate your input!',
        isActive: true,
      },
      {
        channel: MessageChannel.WhatsApp,
        response:
          "Hey {{sender_username}}, we're always eager to hear from you! 🌟 Please share any feedback, comments, or suggestions you have about our products or services. Your input helps us improve and provide better experiences for you!",
        isActive: true,
      },
    ],
  },
  {
    intent: 'Request for Making a Purchase',
    intentDescription:
      'Requests or questions about purchasing a product and how and where and which online channels can they visit.',
    responses: [
      {
        channel: MessageChannel.Email,
        response:
          "Hey {{sender_username}}, we're excited to assist you with your purchase! 🛒 To make a purchase, simply visit our website and browse our wide range of products. If you need any assistance or have any questions, feel free to reach out to us!",
        isActive: true,
      },
      {
        channel: MessageChannel.Facebook,
        response:
          "Hey {{sender_username}}, thanks for considering us for your purchase! 🛍️ You can explore our products on our website and make your purchase directly. If you need any help or have questions, don't hesitate to ask!",
        isActive: true,
      },
      {
        channel: MessageChannel.Instagram,
        response:
          "Hey {{sender_username}}, we're here to help you make your purchase! 🛒 Visit our website to explore our products and make your purchase. If you have any questions or need assistance, feel free to reach out to us!",
        isActive: true,
      },
      {
        channel: MessageChannel.WhatsApp,
        response:
          "Hey {{sender_username}}, we're excited to help you with your purchase! 🛍️ You can browse our products on our website and make your purchase there. If you have any questions or need assistance, we're here to help!",
        isActive: true,
      },
    ],
  },
  {
    intent: 'Request for Available Promotions and Discounts',
    intentDescription:
      'Questions or queries related to users looking for discounts, promotions, offers, wanting to apply discounts, redeem promotional offers.',
    responses: [
      {
        channel: MessageChannel.Email,
        response:
          "Hey {{sender_username}}, we're currently offering exciting promotions and discounts! 🎉 Some of our ongoing offers include: 20% off on selected items, buy one get one free, and free shipping on orders over $50. Check our website for more details and start saving today!",
        isActive: true,
      },
      {
        channel: MessageChannel.Facebook,
        response:
          'Hey {{sender_username}}, thanks for reaching out! 🎉 We have some great promotions and discounts available! Some of our current offers include: 20% off on selected items, buy one get one free, and free shipping on orders over $50. Visit our website to explore all the deals and start saving!',
        isActive: true,
      },
      {
        channel: MessageChannel.Instagram,
        response:
          "Hey {{sender_username}}, we're excited to share our promotions and discounts with you! 🎉 Currently, we have offers such as 20% off on selected items, buy one get one free, and free shipping on orders over $50. Head over to our website to discover more savings!",
        isActive: true,
      },
      {
        channel: MessageChannel.WhatsApp,
        response:
          'Hey {{sender_username}}, we have some fantastic promotions and discounts available for you! 🎉 Some of our ongoing offers include: 20% off on selected items, buy one get one free, and free shipping on orders over $50. Check out our website for more details and start saving now!',
        isActive: true,
      },
    ],
  },
  {
    intent: 'Request for Discount Redemptions',
    intentDescription: 'Request to apply discounts, redeem promotional offers.',
    responses: [
      {
        channel: MessageChannel.Email,
        response:
          'Hey {{sender_username}}, great news! 🎉 You can redeem your discount code on our website during checkout. Simply enter the code at the designated field, and the discount will be applied to your order. Happy shopping!',
        isActive: true,
      },
      {
        channel: MessageChannel.Facebook,
        response:
          "Hey {{sender_username}}, congratulations on your discount! 🎉 To redeem your code, visit our website and proceed to checkout. There, you'll find a field to enter your discount code. Enter it, and enjoy your savings!",
        isActive: true,
      },
      {
        channel: MessageChannel.Instagram,
        response:
          "Hey {{sender_username}}, we're thrilled you have a discount code! 🎉 Head over to our website and proceed to checkout to redeem it. Simply enter the code at checkout, and your discount will be applied to your purchase. Happy shopping!",
        isActive: true,
      },
      {
        channel: MessageChannel.WhatsApp,
        response:
          'Hey {{sender_username}}, good news! 🎉 You can redeem your discount code on our website during checkout. Just enter the code in the specified field, and the discount will be applied to your order. Enjoy your savings!',
        isActive: true,
      },
    ],
  },
  {
    intent: 'Request for Shipping',
    intentDescription:
      'Questions or queries or requests related to shipping methods available, countries available for shipping, international and/or local shipping, estimated days, shipping costs.',
    responses: [
      {
        channel: MessageChannel.Email,
        response:
          'Hey {{sender_username}}, we offer both domestic and international shipping options! 🌍 Shipping costs and delivery times may vary depending on your location and selected shipping method. Please visit our website or contact us for more details about shipping options available to you.',
        isActive: true,
      },
      {
        channel: MessageChannel.Facebook,
        response:
          'Hey {{sender_username}}, thanks for reaching out! 📦 We provide shipping services worldwide! Shipping costs and delivery times vary based on your location and chosen shipping method. Feel free to check our website for more information on available shipping options.',
        isActive: true,
      },
      {
        channel: MessageChannel.Instagram,
        response:
          "Hey {{sender_username}}, we're here to assist you with shipping! 🌍 We offer both domestic and international shipping options. Shipping costs and delivery times depend on your location and selected shipping method. For more details, please visit our website or contact us directly.",
        isActive: true,
      },
      {
        channel: MessageChannel.WhatsApp,
        response:
          'Hey {{sender_username}}, we provide shipping services worldwide! 📦 Shipping costs and delivery times may vary depending on your location and chosen shipping method. Feel free to check our website or reach out to us for more information on available shipping options.',
        isActive: true,
      },
    ],
  },
  {
    intent: 'Request for Same Day Delivery',
    intentDescription: 'Questions or queries related to same day delivery service availability.',
    responses: [
      {
        channel: MessageChannel.Email,
        response:
          "Hey {{sender_username}}, we offer same-day delivery services for select locations! 🚚 To check if same-day delivery is available in your area, please visit our website or contact our customer support team. We'll be happy to assist you!",
        isActive: true,
      },
      {
        channel: MessageChannel.Facebook,
        response:
          'Hey {{sender_username}}, thanks for your interest! 📦 Same-day delivery may be available for certain locations. Please check our website or contact us directly to inquire about same-day delivery options in your area.',
        isActive: true,
      },
      {
        channel: MessageChannel.Instagram,
        response:
          "Hey {{sender_username}}, we're excited to offer same-day delivery services in some areas! 🚚 To see if same-day delivery is available in your location, please visit our website or reach out to us for more information.",
        isActive: true,
      },
      {
        channel: MessageChannel.WhatsApp,
        response:
          'Hey {{sender_username}}, we provide same-day delivery services for select areas! 📦 To check if same-day delivery is available in your location, please visit our website or contact our customer support team for assistance.',
        isActive: true,
      },
    ],
  },
  {
    intent: 'Request for Click and Collect',
    intentDescription:
      'Questions or queries related to availability of click and collect service where users can pick up the items bought themselves.',
    responses: [
      {
        channel: MessageChannel.Email,
        response:
          "Hey {{sender_username}}, we offer click-and-collect services! 🛍️ To utilize this option, simply select 'click and collect' at checkout and choose your preferred pickup location. Once your order is ready, we'll notify you to collect it at your convenience.",
        isActive: true,
      },
      {
        channel: MessageChannel.Facebook,
        response:
          "Hey {{sender_username}}, thanks for your interest! 🛍️ With our click-and-collect service, you can conveniently pick up your order from a designated location. Just select 'click and collect' at checkout, and we'll let you know when your order is ready for pickup.",
        isActive: true,
      },
      {
        channel: MessageChannel.Instagram,
        response:
          "Hey {{sender_username}}, we're pleased to offer click-and-collect services! 🛍️ Simply choose 'click and collect' at checkout, and select your preferred pickup location. Once your order is ready, we'll notify you to collect it at your convenience.",
        isActive: true,
      },
      {
        channel: MessageChannel.WhatsApp,
        response:
          "Hey {{sender_username}}, we provide click-and-collect services for your convenience! 🛍️ Just select 'click and collect' at checkout, and choose your preferred pickup location. We'll inform you once your order is ready for pickup, making shopping easy for you!",
        isActive: true,
      },
    ],
  },
  {
    intent: 'Request for Store Locator',
    intentDescription:
      'Questions related to availability of a product at certain physical location and their opening hours.',
    responses: [
      {
        channel: MessageChannel.Email,
        response:
          "Hey {{sender_username}}, we're glad you're interested in visiting our stores! 🏬 To find the nearest store location, please visit our website and use our store locator tool. It will provide you with directions and store hours for your convenience.",
        isActive: true,
      },
      {
        channel: MessageChannel.Facebook,
        response:
          'Hey {{sender_username}}, thanks for your interest in visiting us! 🏬 To find the nearest store location, please visit our website and use our store locator tool. It will help you find the closest store and provide you with all the necessary information.',
        isActive: true,
      },
      {
        channel: MessageChannel.Instagram,
        response:
          "Hey {{sender_username}}, we're excited to have you visit our stores! 🏬 To find the nearest store location, head over to our website and utilize our store locator tool. It will guide you to the closest store and provide you with details about it.",
        isActive: true,
      },
      {
        channel: MessageChannel.WhatsApp,
        response:
          "Hey {{sender_username}}, we'd love to see you at one of our stores! 🏬 To find the nearest location, please visit our website and use our store locator tool. It will help you locate the closest store and provide you with all the necessary information.",
        isActive: true,
      },
    ],
  },
  {
    intent: 'Request for Product Availability',
    intentDescription:
      'Questions or queries related to availability of certain products and services.',
    responses: [
      {
        channel: MessageChannel.Email,
        response:
          "Hey {{sender_username}}, we're thrilled you're interested in our products! 🛒 To check product availability, please visit our website and browse our catalog. If you have any specific product inquiries, feel free to reach out to us, and we'll provide you with availability information.",
        isActive: true,
      },
      {
        channel: MessageChannel.Facebook,
        response:
          "Hey {{sender_username}}, thanks for your interest! 🛍️ To check product availability, please visit our website and browse our catalog. If you need assistance or have questions about specific products, don't hesitate to ask!",
        isActive: true,
      },
      {
        channel: MessageChannel.Instagram,
        response:
          "Hey {{sender_username}}, we're excited you're considering our products! 🛒 To check product availability, head over to our website and browse our catalog. If you have any questions about availability or specific products, feel free to reach out to us.",
        isActive: true,
      },
      {
        channel: MessageChannel.WhatsApp,
        response:
          "Hey {{sender_username}}, we'd love to help you find our products! 🛍️ To check product availability, please visit our website and explore our catalog. If you have any questions or need assistance, don't hesitate to contact us!",
        isActive: true,
      },
    ],
  },
  {
    intent: 'Request for Price Matching',
    intentDescription:
      'Queries or requests or inquiries about matching the price of a product found at a different retailer, seeking to receive the same price offered elsewhere.',
    responses: [
      {
        channel: MessageChannel.Email,
        response:
          "Hey {{sender_username}}, we're glad you're considering us for your purchase! 💰 We offer price matching on select items. If you find a lower price for the same product elsewhere, please provide us with the details, and we'll do our best to match or beat it!",
        isActive: true,
      },
      {
        channel: MessageChannel.Facebook,
        response:
          "Hey {{sender_username}}, thanks for reaching out! 💸 We offer price matching on select items. If you find a lower price for the same product elsewhere, please let us know, and we'll do our best to match or beat it!",
        isActive: true,
      },
      {
        channel: MessageChannel.Instagram,
        response:
          "Hey {{sender_username}}, we're here to help you get the best deal! 💰 We offer price matching on select items. If you find a lower price for the same product elsewhere, feel free to reach out to us, and we'll do our best to match or beat it!",
        isActive: true,
      },
      {
        channel: MessageChannel.WhatsApp,
        response:
          "Hey {{sender_username}}, we're committed to offering you the best prices! 💸 We offer price matching on select items. If you find a lower price for the same product elsewhere, please provide us with the details, and we'll do our best to match or beat it!",
        isActive: true,
      },
    ],
  },
  {
    intent: 'Request for Account Management',
    intentDescription:
      'Questions or requests related to users wanting to manage their account details, such as profile information, addresses, or payment methods.',
    responses: [
      {
        channel: MessageChannel.Email,
        response:
          "Hey {{sender_username}}, we're here to assist you with your account management! 🛠️ You can easily update your profile information, addresses, and payment methods by logging into your account on our website. If you encounter any issues or need further assistance, feel free to reach out to us.",
        isActive: true,
      },
      {
        channel: MessageChannel.Facebook,
        response:
          "Hey {{sender_username}}, thanks for reaching out! 📝 For account management tasks such as updating profile information, addresses, or payment methods, please log into your account on our website. If you have any questions or encounter any issues, don't hesitate to contact us for assistance.",
        isActive: true,
      },
      {
        channel: MessageChannel.Instagram,
        response:
          "Hey {{sender_username}}, we're here to help you with account management! 🛠️ You can update your profile information, addresses, and payment methods by logging into your account on our website. If you need assistance or have questions, feel free to reach out to us.",
        isActive: true,
      },
      {
        channel: MessageChannel.WhatsApp,
        response:
          "Hey {{sender_username}}, we're committed to helping you manage your account! 📝 You can easily update your profile information, addresses, and payment methods by logging into your account on our website. If you need assistance or have any questions, please don't hesitate to contact us.",
        isActive: true,
      },
    ],
  },
  {
    intent: 'Other',
    intentDescription: 'Choose this if the query doesn’t fall into any of the other intents.',
    responses: [
      {
        channel: MessageChannel.Email,
        response:
          "Hey {{sender_username}}, it seems like your inquiry doesn't fall into any specific category. 🤔 Please provide us with more details about your question or concern, and we'll do our best to assist you accordingly. Your satisfaction is important to us!",
        isActive: true,
      },
      {
        channel: MessageChannel.Facebook,
        response:
          "Hey {{sender_username}}, thanks for reaching out! 🤝 If your inquiry doesn't fit into any of our predefined categories, please provide us with more information about your question or concern, and we'll be happy to assist you.",
        isActive: true,
      },
      {
        channel: MessageChannel.Instagram,
        response:
          "Hey {{sender_username}}, it looks like your question doesn't match any of our predefined categories. 🤷‍♂️ Please provide us with more details about your inquiry, and we'll do our best to assist you accordingly.",
        isActive: true,
      },
      {
        channel: MessageChannel.WhatsApp,
        response:
          "Hey {{sender_username}}, it seems like your query doesn't fit into any specific category. 🤔 Please provide us with more information about your question or concern, and we'll do our best to assist you. Your satisfaction is our priority!",
        isActive: true,
      },
    ],
  },
];
