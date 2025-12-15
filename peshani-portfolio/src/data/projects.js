const projects = [
  {
    id: 1,
    title: "Simpex Solar",
    projectType: "Group Project",
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
    projectType: "Group Project",
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
    projectType: "Group Project",
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
    projectType: "Individual Project",
    description:
      "A full-stack web application to help small businesses manage and track their mobile field teams. The platform provides a centralized dashboard for managers to assign tasks and an interface for agents to view and update their work in real-time.",
    image: "/assets/ongoing.jpg",
    technologies: ["React", "Java Spring Boot", "PostgreSQL"],
    githubLink: "https://github.com/Peshani-Rasangika/FieldLink",
    details: [],
  },
  {
    id: 5,
    title: "Digital Student ID Card App",
    projectType: "Individual Project",
    description:
      "Universities often face delays when issuing physical student ID cards during new enrollment periods. To solve this, I developed a Digital Student ID Card App that lets students instantly access a secure digital ID while they await their physical card. The application uses Asgardeo (WSO2) for authentication, authorization, and user management. Admins add students through the Asgardeo console, and students can log in to view their digital ID.",
    image: "/assets/digitalIDCardApp/landingPage.png",
    technologies: ["React", "Tailwind CSS", "Asgardeo (WSO2)", "Vercel"],
    githubLink: "https://github.com/Peshani-Rasangika/Digital-ID-card",
    liveUrl: "https://digital-student-id-card-rouge.vercel.app/",
    details: [
      {
        type: "text",
        content: "How the System Works",
        bold: true,
      },
      {
        type: "text",
        content:
          "1. Administrator Adds Students: Administrators log in to the Asgardeo Console and create student accounts. These student details are later displayed in the Digital ID Card App.",
      },
      {
        type: "image",
        src: "/assets/digitalIDCardApp/adminAddDetails1.png",
      },
      {
        type: "image",
        src: "/assets/digitalIDCardApp/adminAddDetails2.png",
      },
      {
        type: "text",
        content:
          "2. Student Access: Students open the app and click the 'Access ID Card' button. They are redirected to the Asgardeo login page.",
      },
      {
        type: "image",
        src: "/assets/digitalIDCardApp/studentAccess.png",
      },
      {
        type: "image",
        src: "/assets/digitalIDCardApp/studentLogin.png",
      },
      {
        type: "text",
        content:
          "3. Digital Student ID Display: Once authenticated, students see their digital ID card, which includes their Name, Student ID, Involvement (Undergraduate/Postgraduate), and validity details — all securely retrieved from Asgardeo.",
      },
      {
        type: "image",
        src: "/assets/digitalIDCardApp/studentDigitalID.png",
      },
      {
        type: "text",
        content: "Current Focus",
        bold: true,
      },
      {
        type: "text",
        content:
          "Currently, administrators add student data directly from the Asgardeo console. I am working on enhancing the app so admins can add new students directly from the application itself. This will make the system fully self-contained for the university.",
      },
      {
        type: "text",
        content: "Project Links",
        bold: true,
      },
      {
        type: "text",
        content:
          "Live Deployment: https://digital-student-id-card-rouge.vercel.app/",
      },
      {
        type: "text",
        content:
          "Blog Post: https://medium.com/@prranaweeraos2001/digital-student-id-cards-using-asgardeo-wso2-authentication-d47109042cc0",
      },
    ],
  },
  {
    id: 6,
    title: "TeamSync",
    projectType: "Individual Project",
    description:
      "Developed a responsive full-stack web application named TeamSync to streamline their internal employee management process. The system serves as a centralized directory, allowing administrators to view the current staff list and onboard new team members efficiently.",
    image: "/assets/teamSync/memberList.png",
    technologies: ["React.js", "Tailwind CSS", "PHP", "MySQL"],
    githubLink: "https://github.com/Peshani-Rasangika/TeamSync.git",
    details: [
      {
        type: "text",
        content: "Member Dashboard",
        bold: true,
      },
      {
        type: "text",
        content:
          "The centralized dashboard displays the list of all members with options to edit or delete. It includes search functionality and interactive action buttons.",
      },
      {
        type: "image",
        src: "/assets/teamSync/memberList.png",
      },
      {
        type: "text",
        content: "Add New Member",
        bold: true,
      },
      {
        type: "text",
        content:
          "Administrators can onboard new members using the registration form, which includes fields for personal details and division assignment.",
      },
      {
        type: "image",
        src: "/assets/teamSync/addMember.png",
      },
      {
        type: "text",
        content: "Success notification upon adding a member.",
      },
      {
        type: "image",
        src: "/assets/teamSync/memberAdded.png",
      },
      {
        type: "text",
        content: "Search Functionality",
        bold: true,
      },
      {
        type: "text",
        content:
          "Real-time search functionality allows quick filtering of members by name.",
      },
      {
        type: "image",
        src: "/assets/teamSync/searchMember.png",
      },
      {
        type: "text",
        content: "Update Member Details",
        bold: true,
      },
      {
        type: "text",
        content:
          "Existing member details can be updated easily. The form is pre-filled with current data.",
      },
      {
        type: "image",
        src: "/assets/teamSync/updateMember.png",
      },
      {
        type: "text",
        content: "Success notification upon updating a member.",
      },
      {
        type: "image",
        src: "/assets/teamSync/memberUpdated.png",
      },
      {
        type: "text",
        content: "Updated list view showing the changes.",
      },
      {
        type: "image",
        src: "/assets/teamSync/memberUpdatedList.png",
      },
      {
        type: "text",
        content: "Delete Member",
        bold: true,
      },
      {
        type: "text",
        content:
          "Confirmation dialogs ensure members are not deleted accidentally.",
      },
      {
        type: "image",
        src: "/assets/teamSync/deleteMember.png",
      },
      {
        type: "text",
        content: "Success notification upon deletion.",
      },
      {
        type: "image",
        src: "/assets/teamSync/memberDeleted.png",
      },
      {
        type: "text",
        content: "List view after deletion.",
      },
      {
        type: "image",
        src: "/assets/teamSync/memberDeletedList.png",
      },
      {
        type: "text",
        content: "Safety Features",
        bold: true,
      },
      {
        type: "text",
        content:
          "The system warns users about unsaved changes to prevent data loss when navigating away from a form.",
      },
      {
        type: "image",
        src: "/assets/teamSync/unsavedChangesUpdate.png",
      },
      {
        type: "image",
        src: "/assets/teamSync/unsavedChangesCreate.png",
      },
    ],
  },
  {
    id: 7,
    title: "Inventory Management System",
    projectType: "Individual Project",
    description:
      "Designed and developed a full-stack inventory management system with complete CRUD functionality, deployed on Azure using a scalable, cloud-native architecture.",
    image: "/assets/inventory/landingPage.png",
    technologies: [
      "React",
      "Node.js (Express)",
      "MSSQL (Azure SQL)",
      "Azure App Service",
      "Azure Static Web Apps",
      "GitHub Actions",
      "Tailwind CSS",
    ],
    frontendGithubLink:
      "https://github.com/Peshani-Rasangika/inventory-management-frontend",
    backendGithubLink:
      "https://github.com/Peshani-Rasangika/inventory-management-backend",
    liveUrl: "https://red-river-06629a100.3.azurestaticapps.net/",
    details: [
      {
        type: "text",
        content: "(Live Demo may not work if the backend is in sleep mode.)",
      },
      {
        type: "video",
        src: "/assets/inventory/inventoryMobile.mp4",
      },
      {
        type: "text",
        content:
          "Designed and developed a full-stack inventory management system with complete CRUD functionality.",
      },
      {
        type: "text",
        content:
          "Built RESTful APIs using Node.js and Express to manage products and inventory data.",
      },
      {
        type: "text",
        content:
          "Integrated Azure SQL (MSSQL) as the relational database and configured secure database connectivity using environment variables.",
      },
      {
        type: "text",
        content:
          "Deployed the backend API on Azure App Service and the frontend on Azure Static Web Apps with reliable cloud configuration.",
      },
      {
        type: "text",
        content:
          "Configured environment-based settings and implemented CI/CD pipelines with GitHub Actions to automate build and deployment workflows.",
      },
      {
        type: "text",
        content:
          "Troubleshot deployment, database connectivity, and runtime configuration issues to ensure smooth operation across environments.",
      },
      {
        type: "text",
        content:
          "Tested API endpoints using Postman and validated application behavior across desktop and mobile devices.",
      },
    ],
  },
];

export default projects;
