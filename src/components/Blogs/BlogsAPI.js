const BlogsAPI = [
  {
    id: 1,
    title: 'Debugging',
    discription:
      'Debugging is an essential part of the development process. It involves identifying and removing errors, also known as bugs, from computer programs. Without debugging,',
    paraTwo: 'The Art of Refining Code',
    date: '22 Feb 2023',
    liveBlogLink: "https://shivamkatareblog.hashnode.dev/debugging-the-art-of-refining-code-until-it-shines",
    imgUrl:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1676876334971/f161fcc5-e77c-457a-9d4a-19883382fc01.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
  },
  {
    id: 2,
    title: 'Seven Ways',
    discription:
      'This blog post will dive deep into the various ways to share your knowledge and expertise in the tech industry.',
    paraTwo: 'To Share Knowledge In Tech',
    date: '30 Jan 2023',
    liveBlogLink: "https://blog.reactplay.io/seven-ways-to-share-knowledge-in-tech",
    imgUrl: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1674962936125/97a5d178-e03b-4621-b932-ffd63e68f5d1.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
  },
  {
    id: 3,
    title: 'NEXT JS',
    discription:
      'Learning new thing is always been fun and interesting, but we all have to make sure that we learn in a structured way.',
    paraTwo: 'Getting Started Guide.',
    date: '7 Jan 2023',
    liveBlogLink: "https://www.showwcase.com/show/21430/getting-started-with-next-js",
    imgUrl: 'https://project-assets.showwcase.com/1420x/13602/1673062068602-1673062067102-Copy%252520of%252520Copy%252520of%252520myim.png?type=webp'
  },
  {
    id: 4,
    title: 'Dynamic QR',
    discription:
      'Scanning QR code is the new trendy fashion. Instead of sharing business cards, taking each other`s numbers for transferring money, or sharing email marketing pamphlets, we use QR Codes.',
    paraTwo: 'How to build Guide',
    date: '10 Dec 2022',
    liveBlogLink: "https://www.showwcase.com/show/19231/how-to-build-a-dynamic-qr-code-using-react",
    imgUrl: 'https://project-assets.showwcase.com/13602/1670675819922-1670675818904-Copy%252520of%252520myimage%252520(140%25252'
  },
  {
    id: 5,
    title: 'How did I Get Into Tech?',
    discription:
      'Hey, My name is Shivam, and I am a third-year BCA student. In this blog, I will discuss How I Got into Tech. My path to becoming a tech person was bumpy,',
    paraTwo: 'MyDevStory',
    date: '22 Aug 2022',
    liveBlogLink: "https://www.showwcase.com/show/16926/how-did-i-get-into-tech-mydevstory-gdsaugust",
    imgUrl: 'https://project-assets.showwcase.com/1420x/13602/1661178295758-myimage%2520(140%2520%25C3%2597%252060%2520px)%2520(260%2520%25C3%2597%2520146%2520px)%2520(1600%2520%25C3%2597%2520840%2520px)%2520(1).png?type=webp'
  },
  {
    id: 6,
    title: 'Fueler',
    discription:
      'Are you tired of the traditional ways of showcasing your skills and proof of work? Are you ready to take your career to the next level? Are you looking for a platform that encourages community-led...',
    paraTwo: 'A Revolutionary Platform.',
    date: '15 Jan 2022',
    liveBlogLink: "https://shivamkatareblog.hashnode.dev/fueler-a-revolutionary-platform",
    imgUrl: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1673753428660/f5525fc2-031c-41f4-b45b-34a9912659de.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
  },
  {
    id: 7,
    title: 'GitHub Actions',
    discription:
      'You are probably familiar with Github. A platform to build software, collaborate with folks and contribute to open-source projects.GitHub provides many functionalities that...',
    paraTwo: 'How to get started Guide.',
    date: '11 Jan 2022',
    liveBlogLink: "https://blog.reactplay.io/how-to-get-started-with-github-actions",
    imgUrl: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1667991410675/GfupdsMfD.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
  },
  {
    id: 8,
    title: 'Tools',
    discription:
      'Hey Hashnode👋, I am Shivam, and today I came up with the article where I tell you about the resources which helped me to be a confident...',
    paraTwo: 'Helpful Online Tools.',
    date: '28 Aug 2022',
    liveBlogLink: "https://shivamkatareblog.hashnode.dev/helpful-online-tools-to-self-improve-as-a-developer",
    imgUrl: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1661700617343/wuSPB1QQE.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
  },
  {
    id: 9,
    title: "MONOKLE",
    discription: "Hello Hashnode Community, today we will discuss a fantastic Open Source DevOps tool that will allow us to optimize our lives.If you are just started with Kubernetes and are using...",
    paraTwo: "Manage Your K8s Manifests",
    date: "12 Jul 2022",
    liveBlogLink: "https://blog.wemakedevs.org/monokle-manage-your-k8s-manifests",
    imgUrl: "https://cdn.hashnode.com/res/hashnode/image/upload/v1657366933193/2wbjJ28qW.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
  },
  {
    id: 10,
    title: "Testkube",
    discription: "Testkube is a Kubernetes-native testing framework. It enables running tests directly in your Kubernetes cluster and then saves the results to a centralized...",
    paraTwo: "The Kubernetes-native testing framework",
    date: "30 Aug 2022",
    liveBlogLink: "https://blog.wemakedevs.org/testkube-the-kubernetes-native-testing-framework",
    imgUrl: "https://cdn.hashnode.com/res/hashnode/image/upload/v1660573879323/cEfFssIsd.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
  },
  {
    id: 11,
    title: "React",
    discription: "If you’ve been coding in React JS, the front-end library for building user interfaces, you probably know that it’s the most popular front-end framework...",
    paraTwo: "Functional Components VS Class Components",
    date: "5 Jul 2022",
    liveBlogLink: "https://blog.reactplay.io/react-functional-components-vs-class-components",
    imgUrl: "https://cdn.hashnode.com/res/hashnode/image/upload/v1656945511026/jA3dg1RN0.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
  }
]

export default BlogsAPI;