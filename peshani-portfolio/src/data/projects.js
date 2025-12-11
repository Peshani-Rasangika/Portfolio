const projects = [
  {
    id: 1,
    title: "Simpex Solar",
    description:
      "A comprehensive web-based platform to automate end-to-end business processes for a solar solutions provider, integrating customer relationship management, project tracking, internal operations, and e-commerce into a unified system. Customer, Operations Coordinator, Supplier Coordinator, Human Resource Administrator, Employees(Clerk, Engineer, Technician, Delivery Person) are the user roles.",
    image: "/assets/simpex-solar/landingPage.png",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
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
      "A full-stack social media platform that allows users to create communities, share posts, and interact through comments. People can join communities based on their interests. Users can create posts within these communities and engage with others by commenting on posts.",
    image: "/assets/connectHub/landingPage.png",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    githubLink: "https://github.com/pamudusarasith/ConnectHub.git",
    details: [
      {
        type: "text",
        content:
          "Implemented both frontend and backend for the comment section of the post. Users can create comments on posts.",
        bold: true,
      },
      {
        type: "text",
        content: "This is how the post appears with the comment section.",
      },
      {
        type: "image",
        src: "/assets/connectHub/comment.png",
      },
      {
        type: "text",
        content: "Here user can write a comment on the post.",
      },
      {
        type: "image",
        src: "/assets/connectHub/writeComment.png",
      },
      {
        type: "text",
        content: "The written comment appears here.",
      },
      {
        type: "image",
        src: "/assets/connectHub/addedComment.png",
      },
      {
        type: "text",
        content: "Each comment written on the post appears here as a list.",
      },
      {
        type: "image",
        src: "/assets/connectHub/comments.png",
      },
      {
        type: "text",
        content: "The user can edit the written comment.",
      },
      {
        type: "image",
        src: "/assets/connectHub/editComment.png",
      },
      {
        type: "text",
        content: "The edited comment updates here with a mark as edited.",
      },
      {
        type: "image",
        src: "/assets/connectHub/editedComment.png",
      },
      {
        type: "text",
        content: "The user can delete the written comment.",
      },
      {
        type: "image",
        src: "/assets/connectHub/deletedComment.png",
      },
    ],
  },
  {
    id: 3,
    title: "GoodDevs",
    description:
      "A web-based platform that connects nonprofit organizations and individuals needing technical solutions with volunteer developers. This platform has four roles: Admin, Volunteer, Requester and Sponsor. Requester requests a project, admin views and approve or reject the request. Approved projects are appeared in the projects section and volunteers can apply for these listed projects. Then the requester approves them and then also can grant persmission to approved volunteers to approve upcoming volunteer requests. In project details section there are three subsections: Description, Tasks & Requirements and Discussion. Project details view shows the details of the project including requester plublic profile. These roles can discuss in this discussion section.",
    image: "/assets/goodDevs/landingPage.png",
    technologies: [
      "React (TypeScript)",
      "FastAPI (Python)",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    githubLink: "https://github.com/gooddevs-ucsc/gooddevs-full-stack.git",
    details: [
      {
        type: "text",
        content:
          "Implemented the discussion forum for the project. Users can create threads, comment on threads, and reply to comments.",
        bold: true,
      },
      {
        type: "text",
        content:
          "In the project view, there is a discussion tab where the thread list is displayed.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/thread/threadListWithCommentCount.png",
      },
      {
        type: "text",
        content: "Users can create a new thread.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/thread/createNewThread.png",
      },
      {
        type: "text",
        content: "Once created, the thread appears in the list.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/thread/threadCreated.png",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/thread/newThreadList.png",
      },
      {
        type: "text",
        content: "Users can update their threads.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/thread/updateThread.png",
      },
      {
        type: "text",
        content: "Thread updated successfully.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/thread/threadUpdated.png",
      },
      {
        type: "text",
        content: "Confirmation when cancelling thread update.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/thread/confirmCancelUpdate.png",
      },
      {
        type: "text",
        content: "Users can view the thread details.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/comment/threadView.png",
      },
      {
        type: "text",
        content: "Users can join the discussion.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/comment/joinDiscussion.png",
      },
      {
        type: "text",
        content: "Users can post comments on the thread.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/comment/commentPosted.png",
      },
      {
        type: "text",
        content: "Comments appear for other users.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/comment/commentAppearsForOtherones.png",
      },
      {
        type: "text",
        content: "Users can update their comments.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/comment/updateComment.png",
      },
      {
        type: "text",
        content: "Comment updated successfully.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/comment/commentUpdated.png",
      },
      {
        type: "text",
        content: "Updated comment appears for others.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/comment/updatedCommentAppearsForOtherones.png",
      },
      {
        type: "text",
        content: "Confirmation when cancelling comment update.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/comment/confirmCancelUpdate.png",
      },
      {
        type: "text",
        content: "Users can reply to comments.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/reply/reply.png",
      },
      {
        type: "text",
        content: "Reply posted successfully.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/reply/replyPosted.png",
      },
      {
        type: "text",
        content: "Users can update their replies.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/reply/updateReply.png",
      },
      {
        type: "text",
        content: "Confirmation when cancelling reply update.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/reply/confirmCancelReplyUpdate.png",
      },
      {
        type: "text",
        content: "Reply updated successfully.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/reply/replyUpdated.png",
      },
      {
        type: "text",
        content: "View more replies.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/reply/forMorethan5Replies.png",
      },
      {
        type: "text",
        content: "Expanded view of replies.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/reply/showLess.png",
      },
      {
        type: "text",
        content: "Users can delete their replies.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/reply/deleteReply.png",
      },
      {
        type: "text",
        content: "Confirmation when deleting reply.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/reply/confirmDelete.png",
      },
      {
        type: "text",
        content: "Reply deleted successfully.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/reply/replyDeleted.png",
      },
      {
        type: "text",
        content: "Users can delete their comments.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/comment/deleteComment.png",
      },
      {
        type: "text",
        content: "Confirmation when deleting comment.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/comment/confirmDeleteComment.png",
      },
      {
        type: "text",
        content: "Comment deleted successfully.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/comment/commentDeleted.png",
      },
      {
        type: "text",
        content: "Comments can be sorted.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/comment/changeSorting.png",
      },
      {
        type: "text",
        content: "Sorted by newest first.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/comment/newestFirst.png",
      },
      {
        type: "text",
        content: "Sorted by oldest first.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/comment/oldestFirst.png",
      },
      {
        type: "text",
        content: "Users can delete their threads.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/thread/deleteThread.png",
      },
      {
        type: "text",
        content: "Confirmation when deleting thread.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/thread/confirmDelete.png",
      },
      {
        type: "text",
        content: "Thread deleted successfully.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/projectThread/thread/threadDeleted.png",
      },
      {
        type: "text",
        content: "Implemented the requester public profile.",
        bold: true,
      },
      {
        type: "text",
        content:
          "This profile is accessible in the project description view and the project approval view for the admin.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/requester/publicProfile1.png",
      },
      {
        type: "image",
        src: "/assets/goodDevs/requester/publicProfile2.png",
      },
      {
        type: "text",
        content: "Implemented the project details view for the admin.",
        bold: true,
      },
      {
        type: "text",
        content:
          "This view allows the admin to review project details before approval.",
      },
      {
        type: "image",
        src: "/assets/goodDevs/admin/pendingProjectDetails.png",
      },
    ],
  },
  {
    id: 4,
    title: "FieldLink (Ongoing)",
    description:
      "A full-stack web application to help small businesses manage and track their mobile field teams. The platform provides a centralized dashboard for managers to assign tasks and an interface for agents to view and update their work in real-time.",
    image: "/assets/ongoing.jpg",
    technologies: ["React", "Java Spring Boot", "PostgreSQL"],
    githubLink: "https://github.com/Peshani-Rasangika/FieldLink",
    details: [
      {
        type: "text",
        content: "==>*  INDIVIDUAL PROJECT  *<==",
        bold: true,
      },
    ],
  },
];

export default projects;
