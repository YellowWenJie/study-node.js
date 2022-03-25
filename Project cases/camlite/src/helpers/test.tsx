import { User } from '../components/User';
import { Customer } from '../components/Customer';
import { Task, TaskState } from '../components/Task';
import { Priority } from '../components/Case';
const testLeader: User = {
  id: 10001,
  teamId: '10001',
  usersId: 10001,
  firstName: 'Test',
  lastName: 'User',
  role: 'Team Leader',
};

const testLeader2 = {
  callbackSkill: 'No',
  email: 'leader0@dwp.gov.uk',
  firstName: 'Ellsworth',
  id: 10001,
  job: 'Dynamic Interactions Liaison',
  lastName: 'Leader0',
  organisation: 'DWP',
  password: 'camLite2022',
  phone: {
    home: '0847 014 2615',
    mobile: '01441 02686',
    work: '01678 58863',
  },
  role: 'Team Leader',
  sensitive: 'No',
  staffNo: 'CQ021667',
  status: 'Not Available',
  teamId: 20000,
};

const testTeam = [testLeader];

const testCustomer: Customer = {
  id: 30000,
  crn: 30000,
  nino: 'BN682841B',
  gender: 'T* man',
  firstName: 'Darren',
  otherNames: 'Johnathan',
  lastName: 'Lubowitz',
  preferredName: 'Darren',
  postcode: 'SO70 3WB',
  address: '76781 Edgar Parks Apt. 304',
  language: {
    spoken: 'English',
    written: 'Welsh',
  },
  phone: {
    home: '027 3017 5176',
    mobile: '0801 134 6779',
    work: '0119 262 6623',
  },
  dateOfBirth: '2013-12-16T22:53:01.839Z',
  dateOfDeath: '2021-10-09T13:24:12.323Z',
  preferContact: 'Email',
  notes: [
    {
      title: 'Note Added',
      byline: 'By Caseworker 1',
      time: '2022-03-05T21:43:38.503Z',
      description:
        'Your application is being reviewed by one of our case workers.',
    },
    {
      title: 'Note Added',
      byline: 'By Caseworker 1',
      time: '2022-03-05T18:40:38.428Z',
      description: 'Your application has been received – reference',
    },
  ],
};

const testCustomer2: Customer = {
  id: 30010,
  crn: 30010,
  address: '942 Chauncey Terrace Apt. 153',
  dateOfBirth: '2011-01-24T01:45:30.762Z',
  dateOfDeath: '',
  firstName: 'Kari',
  gender: 'Male',
  language: {
    spoken: 'English',
    written: 'Welsh',
  },
  lastName: 'Renner',
  nino: 'OH895050D',
  notes: [
    {
      byline: 'By Caseworker 1',
      description:
        'Your application is being reviewed by one of our case workers.',
      time: '2022-03-05T19:43:19.653Z',
      title: 'Note Added',
    },
    {
      byline: 'By Caseworker 1',
      description: 'Your application has been received – reference',
      time: '2022-03-05T21:12:09.612Z',
      title: 'Note Added',
    },
  ],
  otherNames: 'Mae',
  phone: {
    home: '0393 754 9088',
    mobile: '016977 2527',
    work: '0368 657 8008',
  },
  postcode: 'NM21 3DQ',
  preferContact: 'Mobile',
  preferredName: 'Kari',
};

const testCases = [
  {
    benefit: 'Pension',
    cases: {
      benefit: 'Universal Credit',
      claimId: 5591,
      createdOn: '2022-03-06T01:45:15.527Z',
      crn: 30010,
      customerName: 'Kari Renner',
      customersId: 30010,
      dueDate: '2022-03-07T16:42:55.517Z',
      id: 10001,
      nino: 'OH895050D',
      ownerName: 'Asha Agent1',
      priority: '',
      resolution: 'Success',
      resolutionDate: '2022-03-05T19:03:05.883Z',
      state: 'open',
      subType: 'Subtype 2',
      teamId: 20002,
      type: 'Type 1',
      usersId: 10006,
    },
    casesId: 40085,
    claimId: 3928,
    createdOn: '2022-03-05T18:37:51.349Z',
    crn: 30010,
    customerName: `${testCustomer2.firstName} ${testCustomer2.lastName}`,
    customersId: testCustomer2.id,
    customers: testCustomer2,
    dueDate: '2022-03-07T14:57:59.520Z',
    id: 50049,
    nino: 'OH895050D',
    ownerName: 'Ellsworth Leader0',
    priority: 'urgent',
    resolution: 'Failure',
    resolutionDate: '2022-03-05T22:07:44.546Z',
    state: 'open',
    subType: 'Subtype 1',
    type: 'Type 2',
    users: testLeader2,
    usersId: 10001,
  },
  {
    benefit: 'Pension',
    cases: {
      benefit: 'Universal Credit',
      claimId: 5591,
      createdOn: '2022-03-06T01:45:15.527Z',
      crn: 30010,
      customerName: 'Kari Renner',
      customersId: 30010,
      dueDate: '2022-03-07T16:42:55.517Z',
      id: 10001,
      nino: 'OH895050D',
      ownerName: 'Asha Agent1',
      priority: '',
      resolution: 'Success',
      resolutionDate: '2022-03-05T19:03:05.883Z',
      state: 'closed',
      subType: 'Subtype 2',
      teamId: 20002,
      type: 'Type 1',
      usersId: 10006,
    },
    casesId: 40085,
    claimId: 3928,
    createdOn: '2022-03-05T18:37:51.349Z',
    crn: 30010,
    customerName: 'Kari Renner',
    customers: testCustomer2,
    customersId: 30010,
    dueDate: '2022-03-07T14:57:59.520Z',
    id: 50049,
    nino: 'OH895050D',
    ownerName: 'Ellsworth Leader0',
    priority: 'urgent',
    resolution: 'Failure',
    resolutionDate: '2022-03-05T22:07:44.546Z',
    state: 'closed',
    subType: 'Subtype 1',
    type: 'Type 2',
    users: testLeader2,
    usersId: 10001,
  },
  {
    benefit: 'Pension',
    cases: {
      benefit: 'Universal Credit',
      claimId: 5591,
      createdOn: '2022-03-06T01:45:15.527Z',
      crn: 30010,
      customerName: 'Kari Renner',
      customersId: 30010,
      dueDate: '2022-03-07T16:42:55.517Z',
      id: 10001,
      nino: 'OH895050D',
      ownerName: 'Asha Agent1',
      priority: '',
      resolution: 'Success',
      resolutionDate: '2022-03-05T19:03:05.883Z',
      state: 'new',
      subType: 'Subtype 2',
      teamId: 20002,
      type: 'Type 1',
      usersId: 10006,
    },
    casesId: 40085,
    claimId: 3928,
    createdOn: '2022-03-05T18:37:51.349Z',
    crn: 30010,
    customerName: 'Kari Renner',
    customers: testCustomer2,
    customersId: 30010,
    dueDate: '2022-03-07T14:57:59.520Z',
    id: 50049,
    nino: 'OH895050D',
    ownerName: 'Ellsworth Leader0',
    priority: 'urgent',
    resolution: 'Failure',
    resolutionDate: '2022-03-05T22:07:44.546Z',
    state: 'new',
    subType: 'Subtype 1',
    type: 'Type 2',
    users: testLeader2,
    usersId: 10001,
  },
];

const testCase1 = {
  userId: 10013,
  id: 30000,
  crn: 30000,
  nino: 'BN682841B',
  gender: 'T* man',
  firstName: 'Darren',
  otherNames: 'Johnathan',
  lastName: 'Lubowitz',
  preferredName: 'Darren',
  postcode: 'SO70 3WB',
  address: '76781 Edgar Parks Apt. 304',
  language: {
    spoken: 'English',
    written: 'Welsh',
  },
  phone: {
    home: '027 3017 5176',
    mobile: '0801 134 6779',
    work: '0119 262 6623',
  },
  dateOfBirth: '2013-12-16T22:53:01.839Z',
  dateOfDeath: '2021-10-09T13:24:12.323Z',
  preferContact: 'Email',
  notes: [
    {
      title: 'Note Added',
      byline: 'By Caseworker 1',
      time: '2022-03-05T21:43:38.503Z',
      description:
        'Your application is being reviewed by one of our case workers.',
    },
    {
      title: 'Note Added',
      byline: 'By Caseworker 1',
      time: '2022-03-05T18:40:38.428Z',
      description: 'Your application has been received – reference',
    },
  ],
};

const testTask1 = {
  userId: 10013,
  id: 30000,
  crn: 30000,
  nino: 'BN682841B',
  gender: 'T* man',
  firstName: 'Darren',
  otherNames: 'Johnathan',
  lastName: 'Lubowitz',
  preferredName: 'Darren',
  postcode: 'SO70 3WB',
  address: '76781 Edgar Parks Apt. 304',
  language: {
    spoken: 'English',
    written: 'Welsh',
  },
  phone: {
    home: '027 3017 5176',
    mobile: '0801 134 6779',
    work: '0119 262 6623',
  },
  dateOfBirth: '2013-12-16T22:53:01.839Z',
  dateOfDeath: '2021-10-09T13:24:12.323Z',
  preferContact: 'Email',
  notes: [
    {
      title: 'Note Added',
      byline: 'By Caseworker 1',
      time: '2022-03-05T21:43:38.503Z',
      description:
        'Your application is being reviewed by one of our case workers.',
    },
    {
      title: 'Note Added',
      byline: 'By Caseworker 1',
      time: '2022-03-05T18:40:38.428Z',
      description: 'Your application has been received – reference',
    },
  ],
};

const testTasks = [
  {
    benefit: 'Pension',
    cases: {
      benefit: 'Universal Credit',
      claimId: 5591,
      createdOn: '2022-03-06T01:45:15.527Z',
      crn: 30010,
      customerName: 'Kari Renner',
      customersId: 30010,
      dueDate: '2022-03-07T16:42:55.517Z',
      id: 10001,
      nino: 'OH895050D',
      ownerName: 'Asha Agent1',
      priority: '',
      resolution: 'Success',
      resolutionDate: '2022-03-05T19:03:05.883Z',
      state: 'open',
      subType: 'Subtype 2',
      teamId: 20002,
      type: 'Type 1',
      usersId: 10006,
    },
    casesId: 40085,
    claimId: 3928,
    createdOn: '2022-03-05T18:37:51.349Z',
    crn: 30010,
    customerName: 'Kari Renner',
    customers: testCustomer2,
    customersId: 30010,
    dueDate: '2022-03-07T14:57:59.520Z',
    id: 50049,
    nino: 'OH895050D',
    ownerName: 'Ellsworth Leader0',
    priority: 'urgent',
    resolution: 'Failure',
    resolutionDate: '2022-03-05T22:07:44.546Z',
    state: 'open',
    subType: 'Subtype 1',
    type: 'Type 2',
    users: testLeader2,
    usersId: 10001,
  },
  {
    benefit: 'Pension',
    cases: {
      benefit: 'Universal Credit',
      claimId: 5591,
      createdOn: '2022-03-06T01:45:15.527Z',
      crn: 30010,
      customerName: 'Kari Renner',
      customersId: 30010,
      dueDate: '2022-03-07T16:42:55.517Z',
      id: 10001,
      nino: 'OH895050D',
      ownerName: 'Asha Agent1',
      priority: '',
      resolution: 'Success',
      resolutionDate: '2022-03-05T19:03:05.883Z',
      state: 'closed',
      subType: 'Subtype 2',
      teamId: 20002,
      type: 'Type 1',
      usersId: 10006,
    },
    casesId: 40085,
    claimId: 3928,
    createdOn: '2022-03-05T18:37:51.349Z',
    crn: 30010,
    customerName: 'Kari Renner',
    customers: testCustomer2,
    customersId: 30010,
    dueDate: '2022-03-07T14:57:59.520Z',
    id: 50049,
    nino: 'OH895050D',
    ownerName: 'Ellsworth Leader0',
    priority: 'urgent',
    resolution: 'Failure',
    resolutionDate: '2022-03-05T22:07:44.546Z',
    state: 'closed',
    subType: 'Subtype 1',
    type: 'Type 2',
    users: testLeader2,
    usersId: 10001,
  },
  {
    benefit: 'Pension',
    cases: {
      benefit: 'Universal Credit',
      claimId: 5591,
      createdOn: '2022-03-06T01:45:15.527Z',
      crn: 30010,
      customerName: 'Kari Renner',
      customersId: 30010,
      dueDate: '2022-03-07T16:42:55.517Z',
      id: 10001,
      nino: 'OH895050D',
      ownerName: 'Asha Agent1',
      priority: '',
      resolution: 'Success',
      resolutionDate: '2022-03-05T19:03:05.883Z',
      state: 'new',
      subType: 'Subtype 2',
      teamId: 20002,
      type: 'Type 1',
      usersId: 10006,
    },
    casesId: 40085,
    claimId: 3928,
    createdOn: '2022-03-05T18:37:51.349Z',
    crn: 30010,
    customerName: 'Kari Renner',
    customers: testCustomer2,
    customersId: 30010,
    dueDate: '2022-03-07T14:57:59.520Z',
    id: 50049,
    nino: 'OH895050D',
    priority: 'urgent',
    resolution: 'Failure',
    resolutionDate: '2022-03-05T22:07:44.546Z',
    state: 'new',
    subType: 'Subtype 1',
    type: 'Type 2',
    users: testLeader2,
    usersId: 10001,
    ownerName: 'Ellsworth Leader0',
  },
];
const selectOption = [
  {
    children: "Other team's queues",
    value: '2',
  },
];
const tableBodyContents = [
  [
    {
      callbackSkill: 'Yes',
      email: 'leader1@dwp.gov.uk',
      firstName: 'Obie',
      id: 10002,
      job: 'International Usability Consultant',
      lastName: 'Leader1',
      organisation: 'Police',
      password: 'camLite2022',
      phone: {
        home: '0117 939 0046',
        mobile: '0113 962 2725',
        work: '0116 809 4765',
      },
      role: 'Team Leader',
      sensitive: 'Slightly',
      staffNo: 'GT321091',
      status: 'Available',
      teamId: 20001,
    },
  ],
];
const selectedTask: Task = {
  id: 50255,
  createdOn: 'createdOn',
  type: 'Type 2',
  subType: 'Subtype 2',
  state: TaskState.new,
  customerName: 'Lindsey Goodwin',
  nino: 'GM208060D',
  crn: '30011',
  benefit: 'Universal Credit',
  resolution: 'Success',
  resolutionDate: '2022-03-18T02:04:14.890Z',
  dueDate: '2022-03-18T20:21:46.250Z',
  usersId: 10019,
  ownerName: 'Sarah Agent14',
  claimId: '9559',
  casesId: 40086,
  priority: Priority.urgent,
};
const stateCases = {
  case: [
    {
      benefit: 'Pension',
      cases: {
        benefit: 'Universal Credit',
        claimId: 5591,
        createdOn: '2022-03-06T01:45:15.527Z',
        crn: 30010,
        customerName: 'Kari Renner',
        customersId: 30010,
        dueDate: '2022-03-07T16:42:55.517Z',
        id: 10001,
        nino: 'OH895050D',
        ownerName: 'Asha Agent1',
        priority: '',
        resolution: 'Success',
        resolutionDate: '2022-03-05T19:03:05.883Z',
        state: 'open',
        subType: 'Subtype 2',
        teamId: 20002,
        type: 'Type 1',
        usersId: 10006,
      },
      casesId: 40085,
      claimId: 3928,
      createdOn: '2022-03-05T18:37:51.349Z',
      crn: 30010,
      customerName: `${testCustomer2.firstName} ${testCustomer2.lastName}`,
      customersId: testCustomer2.id,
      customers: testCustomer2,
      dueDate: '2022-03-07T14:57:59.520Z',
      id: 50049,
      nino: 'OH895050D',
      ownerName: 'Ellsworth Leader0',
      priority: 'urgent',
      resolution: 'Failure',
      resolutionDate: '2022-03-05T22:07:44.546Z',
      state: 'open',
      subType: 'Subtype 1',
      type: 'Type 2',
      users: testLeader2,
      usersId: 10001,
    },
    {
      benefit: 'Pension',
      cases: {
        benefit: 'Universal Credit',
        claimId: 5591,
        createdOn: '2022-03-06T01:45:15.527Z',
        crn: 30010,
        customerName: 'Kari Renner',
        customersId: 30010,
        dueDate: '2022-03-07T16:42:55.517Z',
        id: 10001,
        nino: 'OH895050D',
        ownerName: 'Asha Agent1',
        priority: '',
        resolution: 'Success',
        resolutionDate: '2022-03-05T19:03:05.883Z',
        state: 'closed',
        subType: 'Subtype 2',
        teamId: 20002,
        type: 'Type 1',
        usersId: 10006,
      },
      casesId: 40085,
      claimId: 3928,
      createdOn: '2022-03-05T18:37:51.349Z',
      crn: 30010,
      customerName: 'Kari Renner',
      customers: testCustomer2,
      customersId: 30010,
      dueDate: '2022-03-07T14:57:59.520Z',
      id: 50049,
      nino: 'OH895050D',
      ownerName: 'Ellsworth Leader0',
      priority: 'urgent',
      resolution: 'Failure',
      resolutionDate: '2022-03-05T22:07:44.546Z',
      state: 'closed',
      subType: 'Subtype 1',
      type: 'Type 2',
      users: testLeader2,
      usersId: 10001,
    },
    {
      benefit: 'Pension',
      cases: {
        benefit: 'Universal Credit',
        claimId: 5591,
        createdOn: '2022-03-06T01:45:15.527Z',
        crn: 30010,
        customerName: 'Kari Renner',
        customersId: 30010,
        dueDate: '2022-03-07T16:42:55.517Z',
        id: 10001,
        nino: 'OH895050D',
        ownerName: 'Asha Agent1',
        priority: '',
        resolution: 'Success',
        resolutionDate: '2022-03-05T19:03:05.883Z',
        state: 'new',
        subType: 'Subtype 2',
        teamId: 20002,
        type: 'Type 1',
        usersId: 10006,
      },
      casesId: 40085,
      claimId: 3928,
      createdOn: '2022-03-05T18:37:51.349Z',
      crn: 30010,
      customerName: 'Kari Renner',
      customers: testCustomer2,
      customersId: 30010,
      dueDate: '2022-03-07T14:57:59.520Z',
      id: 50049,
      nino: 'OH895050D',
      ownerName: 'Ellsworth Leader0',
      priority: 'urgent',
      resolution: 'Failure',
      resolutionDate: '2022-03-05T22:07:44.546Z',
      state: 'new',
      subType: 'Subtype 1',
      type: 'Type 2',
      users: testLeader2,
      usersId: 10001,
    },
  ],
};
const stateTasks = {
  task: [
    {
      benefit: 'Pension',
      cases: {
        benefit: 'Universal Credit',
        claimId: 5591,
        createdOn: '2022-03-06T01:45:15.527Z',
        crn: 30010,
        customerName: 'Kari Renner',
        customersId: 30010,
        dueDate: '2022-03-07T16:42:55.517Z',
        id: 10001,
        nino: 'OH895050D',
        ownerName: 'Asha Agent1',
        priority: '',
        resolution: 'Success',
        resolutionDate: '2022-03-05T19:03:05.883Z',
        state: 'open',
        subType: 'Subtype 2',
        teamId: 20002,
        type: 'Type 1',
        usersId: 10006,
      },
      casesId: 40085,
      claimId: 3928,
      createdOn: '2022-03-05T18:37:51.349Z',
      crn: 30010,
      customerName: `${testCustomer2.firstName} ${testCustomer2.lastName}`,
      customersId: testCustomer2.id,
      customers: testCustomer2,
      dueDate: '2022-03-07T14:57:59.520Z',
      id: 50049,
      nino: 'OH895050D',
      ownerName: 'Ellsworth Leader0',
      priority: 'urgent',
      resolution: 'Failure',
      resolutionDate: '2022-03-05T22:07:44.546Z',
      state: 'open',
      subType: 'Subtype 1',
      type: 'Type 2',
      users: testLeader2,
      usersId: 10001,
    },
    {
      benefit: 'Pension',
      cases: {
        benefit: 'Universal Credit',
        claimId: 5591,
        createdOn: '2022-03-06T01:45:15.527Z',
        crn: 30010,
        customerName: 'Kari Renner',
        customersId: 30010,
        dueDate: '2022-03-07T16:42:55.517Z',
        id: 10001,
        nino: 'OH895050D',
        ownerName: 'Asha Agent1',
        priority: '',
        resolution: 'Success',
        resolutionDate: '2022-03-05T19:03:05.883Z',
        state: 'closed',
        subType: 'Subtype 2',
        teamId: 20002,
        type: 'Type 1',
        usersId: 10006,
      },
      casesId: 40085,
      claimId: 3928,
      createdOn: '2022-03-05T18:37:51.349Z',
      crn: 30010,
      customerName: 'Kari Renner',
      customers: testCustomer2,
      customersId: 30010,
      dueDate: '2022-03-07T14:57:59.520Z',
      id: 50049,
      nino: 'OH895050D',
      ownerName: 'Ellsworth Leader0',
      priority: 'urgent',
      resolution: 'Failure',
      resolutionDate: '2022-03-05T22:07:44.546Z',
      state: 'closed',
      subType: 'Subtype 1',
      type: 'Type 2',
      users: testLeader2,
      usersId: 10001,
    },
    {
      benefit: 'Pension',
      cases: {
        benefit: 'Universal Credit',
        claimId: 5591,
        createdOn: '2022-03-06T01:45:15.527Z',
        crn: 30010,
        customerName: 'Kari Renner',
        customersId: 30010,
        dueDate: '2022-03-07T16:42:55.517Z',
        id: 10001,
        nino: 'OH895050D',
        ownerName: 'Asha Agent1',
        priority: '',
        resolution: 'Success',
        resolutionDate: '2022-03-05T19:03:05.883Z',
        state: 'new',
        subType: 'Subtype 2',
        teamId: 20002,
        type: 'Type 1',
        usersId: 10006,
      },
      casesId: 40085,
      claimId: 3928,
      createdOn: '2022-03-05T18:37:51.349Z',
      crn: 30010,
      customerName: 'Kari Renner',
      customers: testCustomer2,
      customersId: 30010,
      dueDate: '2022-03-07T14:57:59.520Z',
      id: 50049,
      nino: 'OH895050D',
      ownerName: 'Ellsworth Leader0',
      priority: 'urgent',
      resolution: 'Failure',
      resolutionDate: '2022-03-05T22:07:44.546Z',
      state: 'new',
      subType: 'Subtype 1',
      type: 'Type 2',
      users: testLeader2,
      usersId: 10001,
    },
  ],
};

export {
  testLeader,
  testLeader2,
  testTeam,
  testCustomer,
  testCustomer2,
  testCase1,
  testTask1,
  testCases,
  testTasks,
  selectOption,
  selectedTask,
  tableBodyContents,
  stateCases,
  stateTasks,
};
