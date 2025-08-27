const projects = [
  {
    id: 1,
    title: "Simpex Solar",
    description:
      "A comprehensive web-based platform to automate end-to-end business processes for a solar solutions provider, integrating customer relationship management, project tracking, internal operations, and e-commerce into a unified system. Customer, Operations Coordinator, Supplier Coordinator, Human Resource Administrator, Employees(Clerk, Engineer, Technician, Delivery Person) are the user roles.",
    image: "/assets/simpex-solar/landingPage.png",
    githubLink: "https://github.com/yomal7/simpex-solar.git",
    details: [
      {
        type: "text",
        bold: true,
        content:
          "Implemented both the frontend and backend for the dashboards of the following employee roles.",
      },
      {
        type: "text",
        content: "Delivery Person Dashboard",
      },
      {
        type: "image",
        src: "/assets/simpex-solar/deliveryPerson/dashboard.png",
      },
      {
        type: "text",
        content: "Engineer Dashboard",
      },
      { type: "image", src: "/assets/simpex-solar/engineer/dashboard.png" },
      {
        type: "text",
        content: "Technician Dashboard",
      },
      { type: "image", src: "/assets/simpex-solar/technician/dashboard.png" },
      {
        type: "text",
        content:
          "Implemented both the frontend and backend for the leave requests of each employee role. They have same UIs for the leave requests.",
        bold: true,
      },
      {
        type: "text",
        content:
          "Here this is how the leave request form is. Both frontend and backend was done by me. Including form validations, with not to select the days before today with some leave types.",
      },
      {
        type: "image",
        src: "/assets/simpex-solar/deliveryPerson/leaveRequestForm.png",
      },
      {
        type: "text",
        content:
          "Leave requests are visible here with the status, submitted request appears here. Employee can view the request details.",
      },
      {
        type: "image",
        src: "/assets/simpex-solar/deliveryPerson/leaveRequests.png",
      },
      {
        type: "text",
        content:
          "This is how the leave request details appear for each employee role. HR Administrator's comment appears here.",
      },
      {
        type: "image",
        src: "/assets/simpex-solar/deliveryPerson/leaveRequestDetails.png",
      },
      {
        type: "text",
        content:
          "Implemented both the frontend and backend for the leave requests approval by HR Administrator.",
        bold: true,
      },
      {
        type: "text",
        content:
          "This is how the leave requests appears in HR Administrator's view for approvals or rejections.",
      },
      {
        type: "image",
        src: "/assets/simpex-solar/hRAdmin/leaveRequests.png",
      },
      {
        type: "text",
        content:
          "HR Administrator can view and approve or reject the leave request. If the employee have assigned tasks in requested days, tasks are appeared here and HR Administrator can manually check and decide whether approve or reject the leave request.",
      },
      {
        type: "image",
        src: "/assets/simpex-solar/hRAdmin/leaveRequestDetails.png",
      },
      {
        type: "image",
        src: "/assets/simpex-solar/hRAdmin/leaveRequestApproval.png",
      },
      {
        type: "image",
        src: "/assets/simpex-solar/hRAdmin/leaveRequestComment.png",
      },
      {
        type: "text",
        content:
          "HR Administrator's comment appears here in employee view request details.",
      },
      {
        type: "image",
        src: "/assets/simpex-solar/deliveryPerson/leaveRequestComment.png",
      },
      {
        type: "text",
        content: "Implemented chat component using websockets.",
        bold: true,
      },
      {
        type: "text",
        content:
          "Customer can chat with Operations Coordinator and Supplier Coordinator.",
      },
      {
        type: "image",
        src: "/assets/simpex-solar/customer/chatList.png",
      },
      {
        type: "text",
        content: "Customer can select coordinator to chat with.",
      },
      {
        type: "image",
        src: "/assets/simpex-solar/customer/customerChat.png",
      },
      {
        type: "text",
        content: "Send message to the Operations Coordinator.",
      },
      {
        type: "image",
        src: "/assets/simpex-solar/customer/chat.png",
      },
      {
        type: "text",
        content: "Operations Coordinator dashboard without notification",
      },
      {
        type: "image",
        src: "/assets/simpex-solar/opeCo/dashboardNoNotifi.png",
      },
      {
        type: "text",
        content: "Operations Coordinator dashboard with notification",
      },
      {
        type: "image",
        src: "/assets/simpex-solar/opeCo/dashboardNotifi.png",
      },
      {
        type: "text",
        content: "Operations Coordinator chat list with unread count.",
      },
      {
        type: "image",
        src: "/assets/simpex-solar/opeCo/chatList.png",
      },
      {
        type: "text",
        content: "Operations Coordinator can send message to each customer.",
      },
      {
        type: "image",
        src: "/assets/simpex-solar/opeCo/chat.png",
      },
      {
        type: "text",
        content: "Customer receives the Operations Coordinator's reply.",
      },
      {
        type: "image",
        src: "/assets/simpex-solar/customer/receivedChat.png",
      },
    ],
  },
  {
    id: 2,
    title: "ConnectHub",
    description:
      "A clean and simple weather application that uses a third-party API to fetch real-time data.",
    image: "/assets/connectHub/landingPage.png",
    githubLink: "https://github.com/pamudusarasith/ConnectHub.git",
  },
  {
    id: 3,
    title: "GoodDevs",
    description:
      "A tool to help users organize their daily tasks with a drag-and-drop interface.",
    image: "/assets/simpex-solar/landingPage.png",
    githubLink: "https://github.com/gooddevs-ucsc/gooddevs-full-stack.git",
  },
];

export default projects;
