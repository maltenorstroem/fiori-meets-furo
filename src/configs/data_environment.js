export const Services = {
  TreeService: {
    name: 'TreeService',
    description: 'service specs for the tree api',
    version: '0.0.1',
    lifecycle: { deprecated: false, info: 'This version is still valid' },
    __proto: {
      package: 'treeservice',
      imports: ['tree/tree.proto', 'google/protobuf/empty.proto'],
      targetfile: 'service.proto',
    },
    services: {
      List: {
        description:
          'The List method takes zero or more parameters as input, and returns a TreeCollection of TreeEntity that match the input parameters.',
        rpc_name: 'ListTrees',
        data: { request: null, response: 'tree.TreeCollection' },
        query: {
          q: {
            description: 'Query term to search a tree',
            type: 'string',
            meta: { label: 'Search', hint: '' },
            __proto: { type: 'string' },
          },
        },
        deeplink: {
          description: 'Describe_the_query_params_if_you_have',
          rel: 'list',
          href: '/mockdata/trees',
          method: 'GET',
        },
      },
      Create: {
        description: 'Creates a new Tree',
        rpc_name: 'CreateTree',
        data: { request: 'tree.Tree', response: 'tree.TreeEntity' },
        query: {},
        deeplink: { rel: 'create', href: '/mockdata/trees', method: 'POST' },
      },
      Get: {
        description:
          'The Get method takes zero or more parameters, and returns a TreeEntity which contains a Tree',
        rpc_name: 'GetTree',
        data: { request: null, response: 'tree.TreeEntity' },
        query: {},
        deeplink: { rel: 'self', href: '/mockdata/trees/{tre}/get.json', method: 'GET' },
      },
      Update: {
        description: 'Updates a Tree, partial updates are supported',
        rpc_name: 'UpdateTree',
        data: { request: 'tree.Tree', response: 'tree.TreeEntity' },
        query: {},
        deeplink: { rel: 'update', href: '/mockdata/trees/{tre}', method: 'PATCH' },
      },
      Delete: {
        description: 'Delete a Tree',
        rpc_name: 'DeleteTree',
        data: { request: 'google.protobuf.Empty', response: 'google.protobuf.Empty' },
        query: {},
        deeplink: { rel: 'delete', href: '/mockdata/trees/{tre}', method: 'DELETE' },
      },
    },
  },
  AuthService: {
    name: 'AuthService',
    description: 'service specs for the auth api',
    version: '0.0.1',
    lifecycle: { deprecated: false, info: 'This version is still valid' },
    __proto: {
      package: 'authservice',
      imports: ['auth/auth.proto', 'google/protobuf/empty.proto'],
      targetfile: 'authservice.proto',
    },
    services: {
      List: {
        description:
          'The List method takes zero or more parameters as input, and returns a AuthCollection of AuthEntity that match the input parameters.',
        rpc_name: 'ListAuths',
        data: { request: null, response: 'auth.AuthCollection' },
        query: {
          q: {
            description: 'Query term to search a auth',
            type: 'string',
            meta: { label: 'Search', hint: '' },
            __proto: { type: 'string' },
          },
        },
        deeplink: {
          description: 'Describe_the_query_params_if_you_have',
          rel: 'list',
          href: '/api/auth',
          method: 'GET',
        },
      },
      Create: {
        description: 'Creates a new Auth',
        rpc_name: 'CreateAuth',
        data: { request: 'auth.Auth', response: 'auth.AuthEntity' },
        query: {},
        deeplink: { rel: 'create', href: '/api/auth', method: 'POST' },
      },
      Get: {
        description:
          'The Get method takes zero or more parameters, and returns a AuthEntity which contains a Auth',
        rpc_name: 'GetAuth',
        data: { request: null, response: 'auth.AuthEntity' },
        query: {},
        deeplink: { rel: 'self', href: '/api/auth/{qp}', method: 'GET' },
      },
      Update: {
        description: 'Updates a Auth, partial updates are supported',
        rpc_name: 'UpdateAuth',
        data: { request: 'auth.Auth', response: 'auth.AuthEntity' },
        query: {},
        deeplink: { rel: 'update', href: '/api/auth/{qp}', method: 'PATCH' },
      },
      Delete: {
        description: 'Logout ala delete a auth session',
        rpc_name: 'Logout',
        data: { request: 'google.protobuf.Empty', response: 'google.protobuf.Empty' },
        query: {},
        deeplink: { rel: 'delete', href: '/api/auth', method: 'DELETE' },
      },
    },
  },
  PersonService: {
    name: 'PersonService',
    description: 'service specs for the person api',
    version: '0.0.1',
    lifecycle: { deprecated: false, info: 'This version is still valid' },
    __proto: {
      package: 'personservice',
      imports: ['person/person.proto', 'google/protobuf/empty.proto'],
      targetfile: 'service.proto',
    },
    services: {
      List: {
        description:
          'The List method takes zero or more parameters as input, and returns a PersonCollection of PersonEntity that match the input parameters.',
        rpc_name: 'ListPersons',
        data: { request: null, response: 'person.PersonCollection' },
        query: {
          q: {
            description: 'Query term to search a person',
            type: 'string',
            meta: { label: 'Search', hint: '' },
            __proto: { type: 'string' },
          },
        },
        deeplink: {
          description: 'Describe_the_query_params_if_you_have',
          rel: 'list',
          href: '/mockdata/persons/list.json',
          method: 'GET',
        },
      },
      Create: {
        description: 'Creates a new Person',
        rpc_name: 'CreatePerson',
        data: { request: 'person.Person', response: 'person.PersonEntity' },
        query: {},
        deeplink: { rel: 'create', href: '/mockdata/persons/create.json', method: 'GET' },
      },
      Get: {
        description:
          'The Get method takes zero or more parameters, and returns a PersonEntity which contains a Person',
        rpc_name: 'GetPerson',
        data: { request: null, response: 'person.PersonEntity' },
        query: {},
        deeplink: { rel: 'self', href: '/mockdata/persons/{prs}/get.json', method: 'GET' },
      },
      Update: {
        description: 'Updates a Person, partial updates are supported',
        rpc_name: 'UpdatePerson',
        data: { request: 'person.Person', response: 'person.PersonEntity' },
        query: {},
        deeplink: { rel: 'update', href: '/mockdata/persons/{prs}/update.json', method: 'PATCH' },
      },
      Delete: {
        description: 'Delete a Person',
        rpc_name: 'DeletePerson',
        data: { request: 'google.protobuf.Empty', response: 'google.protobuf.Empty' },
        query: {},
        deeplink: { rel: 'delete', href: '/mockdata/persons/{prs}/delete.json', method: 'GET' },
      },
    },
  },
  ProjectService: {
    name: 'ProjectService',
    description: 'service specs for the project api',
    version: '0.0.1',
    lifecycle: { deprecated: false, info: 'This version is still valid' },
    __proto: {
      package: 'projectservice',
      imports: ['project/project.proto', 'google/protobuf/empty.proto'],
      targetfile: 'service.proto',
    },
    services: {
      List: {
        description:
          'The List method takes zero or more parameters as input, and returns a ProjectCollection of ProjectEntity that match the input parameters.',
        rpc_name: 'ListProjects',
        data: { request: null, response: 'project.ProjectCollection' },
        filter: {},
        query: {
          q: {
            description: 'Query term to search a project',
            type: 'string',
            meta: { label: 'Search', hint: '' },
            __proto: { type: 'string' },
          },
        },
        deeplink: {
          description: 'Describe_the_query_params_if_you_have',
          rel: 'list',
          href: '/mockdata/projects/list.json',
          method: 'GET',
        },
      },
      Create: {
        description: 'Creates a new Project',
        rpc_name: 'CreateProject',
        data: { request: 'project.Project', response: 'project.ProjectEntity' },
        query: {},
        deeplink: { rel: 'create', href: '/mockdata/projects/create.json', method: 'GET' },
      },
      Get: {
        description:
          'The Get method takes zero or more parameters, and returns a ProjectEntity which contains a Project',
        rpc_name: 'GetProject',
        data: { request: null, response: 'project.ProjectEntity' },
        query: {},
        deeplink: { rel: 'self', href: '/mockdata/projects/{prj}/get.json', method: 'GET' },
      },
      Update: {
        description: 'Updates a Project, partial updates are supported',
        rpc_name: 'UpdateProject',
        data: { request: 'project.Project', response: 'project.ProjectEntity' },
        query: {},
        deeplink: { rel: 'update', href: '/mockdata/projects/{prj}/update.json', method: 'GET' },
      },
      Delete: {
        description: 'Delete a Project',
        rpc_name: 'DeleteProject',
        data: { request: 'google.protobuf.Empty', response: 'google.protobuf.Empty' },
        query: {},
        deeplink: { rel: 'delete', href: '/mockdata/projects/{prj}/delete.json', method: 'GET' },
      },
    },
  },
  ProjectMembersService: {
    name: 'ProjectMembersService',
    description: 'The members of a project',
    version: '1.0.0',
    lifecycle: { deprecated: false, info: 'This version is still valid' },
    __proto: {
      package: 'projectmemberservice',
      imports: ['person/person.proto'],
      targetfile: 'service.proto',
    },
    services: {
      Unsubscribe: {
        description: 'Custom method to unsubscribe a member, complete PersonEntity is expected',
        rdpc_name: 'UnsubscribeMember',
        data: { request: 'person.PersonEntity', response: 'person.PersonCollection' },
        query: {},
        deeplink: {
          description: '{prs} stands for person',
          rel: 'unsubscibe',
          href: '/api/projects/{prj}/members/{prs}:unsubscribe',
          method: 'POST',
        },
      },
      List: {
        description: 'Get a collection with PersonEntities',
        rpc_name: 'ListMembers',
        data: { request: null, response: 'person.PersonCollection' },
        query: {
          q: {
            description: 'Query term to search a member',
            type: 'string',
            meta: { label: 'Search', hint: '' },
            __proto: { type: 'string' },
          },
        },
        deeplink: { rel: 'list', href: '/api/members', method: 'GET' },
      },
    },
  },
  TaskService: {
    name: 'TaskService',
    description: 'service specs for the task api',
    version: '0.0.1',
    lifecycle: { deprecated: false, info: 'This version is still valid' },
    __proto: {
      package: 'taskservice',
      imports: ['task/task.proto', 'google/protobuf/empty.proto'],
      targetfile: 'service.proto',
    },
    services: {
      List: {
        description:
          'The List method takes zero or more parameters as input, and returns a TaskCollection of TaskEntity that match the input parameters.',
        rpc_name: 'ListTasks',
        data: { request: null, response: 'task.TaskCollection' },
        query: {
          q: {
            description: 'Query term to search a task',
            type: 'string',
            meta: { label: 'Search', hint: '' },
            __proto: { type: 'string' },
          },
        },
        deeplink: {
          description: 'Describe_the_query_params_if_you_have',
          rel: 'list',
          href: '/mockdata/tasks/list.json',
          method: 'GET',
        },
      },
      Create: {
        description: 'Creates a new Task',
        rpc_name: 'CreateTask',
        data: { request: 'task.Task', response: 'task.TaskEntity' },
        query: {},
        deeplink: { rel: 'create', href: '/mockdata/tasks/create.json', method: 'GET' },
      },
      Get: {
        description:
          'The Get method takes zero or more parameters, and returns a TaskEntity which contains a Task',
        rpc_name: 'GetTask',
        data: { request: null, response: 'task.TaskEntity' },
        query: {},
        deeplink: { rel: 'self', href: '/mockdata/tasks/{tsk}/get.json', method: 'GET' },
      },
      Update: {
        description: 'Updates a Task, partial updates are not supported',
        rpc_name: 'UpdateTask',
        data: { request: 'task.Task', response: 'task.TaskEntity' },
        query: {},
        deeplink: { rel: 'update', href: '/mockdata/tasks/{tsk}/update.json', method: 'GET' },
      },
      Delete: {
        description: 'Delete a Task',
        rpc_name: 'DeleteTask',
        data: { request: 'google.protobuf.Empty', response: 'google.protobuf.Empty' },
        query: {},
        deeplink: { rel: 'delete', href: '/mockdata/tasks/{tsk}/delete.json', method: 'GET' },
      },
    },
  },
};
export const Types = {
  'tree.Tree': {
    name: 'tree',
    type: 'Tree',
    description: 'Navigation tree type with recursive navigation nodes',
    __proto: { package: 'tree', targetfile: 'tree.proto', imports: [], options: null },
    fields: {
      id: {
        type: 'string',
        description: 'Id of the tree',
        meta: {
          label: 'id',
          hint: 'node id, must be uique',
          default: '',
          readonly: false,
          repeated: false,
          options: { list: [] },
        },
        constraints: null,
        __proto: { number: 1 },
      },
      display_name: {
        type: 'string',
        description: 'String representation of the tree',
        meta: {
          label: 'display_name',
          hint: '',
          default: '',
          readonly: true,
          repeated: false,
          options: { list: [] },
        },
        constraints: null,
        __proto: { number: 2 },
      },
      secondary_text: {
        type: 'string',
        description: 'Secondary text of the node',
        meta: {
          label: 'secondary_text',
          hint: '',
          default: '',
          readonly: false,
          repeated: false,
          options: { list: [] },
        },
        constraints: null,
        __proto: { number: 3 },
      },
      description: {
        type: 'string',
        description: 'description of the tree',
        meta: {
          label: 'description',
          hint: '',
          default: '',
          readonly: false,
          repeated: false,
          options: { list: [] },
          __ui: { component: 'furo-data-textarea-input', flags: ['full'] },
        },
        constraints: null,
        __proto: { number: 4 },
      },
      root: {
        type: 'tree.Navigationnode',
        description: 'Rootnode of the tree',
        meta: {
          label: 'Navigation node',
          hint: 'hint',
          default: '',
          readonly: false,
          repeated: false,
          options: { list: [] },
        },
        constraints: null,
        __proto: { number: 10 },
      },
    },
  },
  'tree.TreeEntity': {
    name: 'tree_entity',
    type: 'TreeEntity',
    description: 'TreeEntity with Tree',
    __proto: {
      package: 'tree',
      imports: ['furo/meta.proto', 'furo/link.proto'],
      targetfile: 'tree.proto',
    },
    fields: {
      data: { description: 'contains a tree.Tree', type: 'tree.Tree', __proto: { number: 1 } },
      links: {
        description: 'Hateoas links',
        type: 'furo.Link',
        meta: { repeated: true },
        __proto: { number: 2 },
      },
      meta: { description: 'Meta for the response', type: 'furo.Meta', __proto: { number: 3 } },
    },
  },
  'tree.Navigationnode': {
    name: 'navigationnode',
    type: 'Navigationnode',
    description: 'Item of the navigationtree',
    __proto: { package: 'tree', imports: ['furo/link.proto'], targetfile: 'tree.proto' },
    fields: {
      id: { description: 'Id of the node', type: 'string', __proto: { number: 1 } },
      display_name: {
        description: 'String representation of the node',
        type: 'string',
        meta: { readonly: true, 'tree-search-index': true },
        __proto: { number: 2 },
      },
      secondary_text: {
        description: 'Secondary text of the node',
        type: 'string',
        meta: { 'tree-search-index': true },
        __proto: { number: 3 },
      },
      description: {
        description: 'description of the node',
        meta: { 'tree-search-index': true },
        type: 'string',
        __proto: { number: 4 },
      },
      icon: { description: 'icon of the node', type: 'string', __proto: { number: 5 } },
      panel: {
        description:
          'Which panel (i.e. view, edit, display) opens the node type (which is defined in property link)',
        type: 'string',
        meta: { readonly: true, 'tree-search-index': false },
        __proto: { number: 6 },
      },
      key_words: {
        description: 'key words of the node',
        meta: { 'tree-search-index': true },
        type: 'string',
        __proto: { number: 7 },
      },
      has_error: { description: 'if node has error', type: 'bool', __proto: { number: 8 } },
      open: { description: 'node is open or not', type: 'bool', __proto: { number: 9 } },
      link: {
        description: 'Deeplink information of this node',
        type: 'furo.Link',
        __proto: { number: 10 },
      },
      is_group_label: {
        description: 'This node is a group label',
        type: 'bool',
        meta: { default: false },
        __proto: { number: 11 },
      },
      children: {
        description: 'Children of this node',
        type: 'tree.Navigationnode',
        meta: { repeated: true },
        __proto: { number: 12 },
      },
    },
  },
  'tree.TreeCollection': {
    name: 'tree_collection',
    type: 'TreeCollection',
    description: 'TreeCollection with repeated TreeEntity',
    __proto: {
      package: 'tree',
      imports: ['furo/meta.proto', 'furo/link.proto'],
      targetfile: 'tree.proto',
    },
    fields: {
      meta: { description: 'Meta for the response', type: 'furo.Meta', __proto: { number: 2 } },
      links: {
        description: 'Hateoas links',
        type: 'furo.Link',
        meta: { repeated: true },
        __proto: { number: 3 },
      },
      entities: {
        description: 'Contains a tree.TreeEntity repeated',
        type: 'tree.TreeEntity',
        meta: { repeated: true },
        __proto: { number: 4 },
      },
    },
  },
  'auth.AuthCollection': {
    name: 'auth_collection',
    type: 'AuthCollection',
    description: 'AuthCollection with repeated AuthEntity',
    __proto: {
      package: 'auth',
      options: {},
      imports: ['furo/meta.proto', 'furo/link.proto'],
      targetfile: 'auth.proto',
    },
    fields: {
      meta: { description: 'Meta for the response', type: 'furo.Meta', __proto: { number: 2 } },
      links: {
        description: 'Hateoas links',
        type: 'furo.Link',
        meta: { repeated: true },
        __proto: { number: 3 },
      },
      entities: {
        description: 'Contains a auth.AuthEntity repeated',
        type: 'auth.AuthEntity',
        meta: { repeated: true },
        __proto: { number: 4 },
      },
    },
  },
  'auth.AuthEntity': {
    name: 'auth_entity',
    type: 'AuthEntity',
    description: 'AuthEntity with Auth',
    __proto: {
      package: 'auth',
      options: {},
      imports: ['furo/meta.proto', 'furo/link.proto'],
      targetfile: 'auth.proto',
    },
    fields: {
      data: { description: 'contains a auth.Auth', type: 'auth.Auth', __proto: { number: 1 } },
      links: {
        description: 'Hateoas links',
        type: 'furo.Link',
        meta: { repeated: true },
        __proto: { number: 2 },
      },
      meta: { description: 'Meta for the response', type: 'furo.Meta', __proto: { number: 3 } },
    },
  },
  'auth.Auth': {
    name: 'auth',
    type: 'Auth',
    description: 'autogenerated',
    __proto: { package: 'auth', options: {}, imports: [], targetfile: 'auth.proto' },
    fields: {
      id: {
        description: 'Identity of Auth',
        type: 'string',
        meta: { label: 'Id', default: '', hint: '' },
        constraints: {},
        __proto: { number: 1 },
      },
      username: {
        type: 'string',
        description: 'The unique username, ussualy an email address',
        meta: { label: 'Username', hint: '' },
        constraints: {},
        __proto: { number: 2 },
      },
      password: {
        type: 'string',
        description: 'Das _neue_ Kennwort des Benutzers',
        meta: { label: 'Password', hint: 'Look under your keyboard' },
        constraints: {},
        __proto: { number: 3 },
      },
      role: {
        type: 'string',
        description: '',
        meta: { label: 'Role', hint: '' },
        constraints: {},
        __proto: { number: 4 },
      },
    },
  },
  'person.Person': {
    name: 'person',
    type: 'Person',
    description: 'Person message type',
    __proto: {
      package: 'person',
      imports: ['google/protobuf/field_mask.proto'],
      targetfile: 'person.proto',
    },
    fields: {
      id: {
        description: 'Identity of a person',
        type: 'string',
        meta: { label: 'Person', default: '', hint: '', readonly: true },
        constraints: {},
        __proto: { number: 1 },
      },
      display_name: {
        description: 'Localized String representation of a person',
        type: 'string',
        meta: { label: 'Person', default: '', hint: '', readonly: true },
        constraints: {},
        __proto: { number: 2 },
      },
      name: {
        description: 'Name of a person',
        type: 'string',
        meta: { label: 'Name', default: '', hint: '' },
        constraints: { required: { is: 'true', message: 'you must enter a name' } },
        __proto: { number: 3 },
      },
      first_name: {
        description: 'First name of a person',
        type: 'string',
        meta: { label: 'First name', default: '', hint: '' },
        constraints: {},
        __proto: { number: 4 },
        __ui: { component: 'furo-data-text-input' },
      },
      phone_nr: {
        description: 'Internal phone number',
        type: 'string',
        meta: { label: 'Phone No', default: '', hint: '' },
        constraints: {},
        __proto: { number: 5 },
      },
      skills: {
        description: 'List of main skills of a person',
        type: 'string',
        meta: { label: 'Skills', default: '', hint: '', repeated: true },
        constraints: {},
        __proto: { number: 6 },
      },
      update_mask: {
        description:
          'Contains a field_mask which fields of the targeted resource are going to be updated',
        type: 'google.protobuf.FieldMask',
        meta: {},
        constraints: {},
        __proto: { number: 7 },
        __ui: { __no_init: false },
      },
    },
  },
  'person.PersonCollection': {
    name: 'person_collection',
    type: 'PersonCollection',
    description: 'PersonCollection with repeated PersonEntity',
    __proto: {
      package: 'person',
      imports: ['furo/meta.proto', 'furo/link.proto'],
      targetfile: 'person.proto',
    },
    fields: {
      meta: { description: 'Meta for the response', type: 'furo.Meta', __proto: { number: 2 } },
      links: {
        description: 'Hateoas links',
        type: 'furo.Link',
        meta: { repeated: true },
        __proto: { number: 3 },
      },
      entities: {
        description: 'Contains a person.PersonEntity repeated',
        type: 'person.PersonEntity',
        meta: { repeated: true },
        __proto: { number: 4 },
      },
    },
  },
  'person.PersonEntity': {
    name: 'person_entity',
    type: 'PersonEntity',
    description: 'PersonEntity with Person',
    __proto: {
      package: 'person',
      imports: ['furo/meta.proto', 'furo/link.proto'],
      targetfile: 'person.proto',
    },
    fields: {
      data: {
        description: 'contains a person.Person',
        type: 'person.Person',
        __proto: { number: 1 },
      },
      links: {
        description: 'Hateoas links',
        type: 'furo.Link',
        meta: { repeated: true },
        __proto: { number: 2 },
      },
      meta: { description: 'Meta for the response', type: 'furo.Meta', __proto: { number: 3 } },
    },
  },
  'project.ProjectCollection': {
    name: 'project_collection',
    type: 'ProjectCollection',
    description: 'ProjectCollection with repeated ProjectEntity',
    __proto: {
      package: 'project',
      imports: ['furo/meta.proto', 'furo/link.proto'],
      targetfile: 'project.proto',
    },
    fields: {
      meta: { description: 'Meta for the response', type: 'furo.Meta', __proto: { number: 2 } },
      links: {
        description: 'Hateoas links',
        type: 'furo.Link',
        meta: { repeated: true },
        __proto: { number: 3 },
      },
      entities: {
        description: 'Contains a project.ProjectEntity repeated',
        type: 'project.ProjectEntity',
        meta: { repeated: true },
        __proto: { number: 4 },
      },
    },
  },
  'project.ProjectEntity': {
    name: 'project_entity',
    type: 'ProjectEntity',
    description: 'ProjectEntity with Project',
    __proto: {
      package: 'project',
      imports: ['furo/meta.proto', 'furo/link.proto'],
      targetfile: 'project.proto',
    },
    fields: {
      data: {
        description: 'contains a project.Project',
        type: 'project.Project',
        __proto: { number: 1 },
      },
      links: {
        description: 'Hateoas links',
        type: 'furo.Link',
        meta: { repeated: true },
        __proto: { number: 2 },
      },
      meta: { description: 'Meta for the response', type: 'furo.Meta', __proto: { number: 3 } },
    },
  },
  'project.Project': {
    name: 'project',
    type: 'Project',
    description: 'Project description',
    __proto: {
      package: 'project',
      imports: ['google/type/money.proto', 'google/type/date.proto', 'person/person.proto'],
      targetfile: 'project.proto',
    },
    fields: {
      id: {
        description: 'Identity of a project',
        type: 'string',
        meta: { label: 'Id', default: '', hint: '', readonly: true },
        constraints: {},
        __proto: { number: 1 },
      },
      display_name: {
        description: 'Localized String representation of a project',
        type: 'string',
        meta: { label: 'Project', default: '', hint: '', readonly: true },
        constraints: {},
        __proto: { number: 2 },
      },
      start: {
        description: 'Start date of the project',
        type: 'google.type.Date',
        meta: { label: 'Project start', default: '', hint: '' },
        constraints: {},
        __proto: { number: 3 },
      },
      end: {
        description: 'Prospective end date of the project',
        type: 'google.type.Date',
        meta: { label: 'Project end', default: '', hint: '' },
        constraints: {},
        __proto: { number: 4 },
      },
      description: {
        description: 'Short project description',
        type: 'string',
        meta: { label: 'Description', default: '', hint: '' },
        constraints: {},
        __proto: { number: 5 },
      },
      members: {
        description: 'List of project members',
        type: 'person.Person',
        meta: { label: 'Project members', default: '', hint: '', repeated: true },
        constraints: {},
        __proto: { number: 6 },
      },
      cost_limit: {
        description: 'Project cost limit',
        type: 'google.type.Money',
        meta: { label: 'Cost limit', default: '', hint: '' },
        constraints: {
          required: { is: 'true', message: 'is required' },
          max: { is: 25000, message: 'max 25000' },
        },
        __proto: { number: 7 },
      },
    },
  },
  'task.TaskEntity': {
    name: 'task_entity',
    type: 'TaskEntity',
    description: 'TaskEntity with Task',
    __proto: {
      package: 'task',
      options: {},
      imports: ['furo/meta.proto', 'furo/link.proto'],
      targetfile: 'task.proto',
    },
    fields: {
      data: { description: 'contains a task.Task', type: 'task.Task', __proto: { number: 1 } },
      links: {
        description: 'Hateoas links',
        type: 'furo.Link',
        meta: { repeated: true },
        __proto: { number: 2 },
      },
      meta: { description: 'Meta for the response', type: 'furo.Meta', __proto: { number: 3 } },
    },
  },
  'task.TaskCollection': {
    name: 'task_collection',
    type: 'TaskCollection',
    description: 'TaskCollection with repeated TaskEntity',
    __proto: {
      package: 'task',
      options: {},
      imports: ['furo/meta.proto', 'furo/link.proto'],
      targetfile: 'task.proto',
    },
    fields: {
      meta: { description: 'Meta for the response', type: 'furo.Meta', __proto: { number: 2 } },
      links: {
        description: 'Hateoas links',
        type: 'furo.Link',
        meta: { repeated: true },
        __proto: { number: 3 },
      },
      entities: {
        description: 'Contains a task.TaskEntity repeated',
        type: 'task.TaskEntity',
        meta: { repeated: true },
        __proto: { number: 4 },
      },
    },
  },
  'task.Task': {
    name: 'task',
    type: 'Task',
    description: 'Task data description',
    __proto: {
      package: 'task',
      targetfile: 'task.proto',
      imports: ['furo/reference.proto'],
      options: null,
    },
    fields: {
      id: {
        type: 'string',
        description: 'Identity of a task',
        __proto: { number: 1 },
        __ui: { component: '', flags: [], no_init: false, no_skip: false },
        meta: {
          label: 'Id',
          hint: '',
          default: '',
          readonly: true,
          repeated: false,
          options: { list: [], flags: null },
        },
        constraints: null,
      },
      display_name: {
        type: 'string',
        description: 'Localized String representation of a task',
        __proto: { number: 2 },
        __ui: { component: '', flags: [], no_init: false, no_skip: false },
        meta: {
          label: 'task.display_name.label',
          hint: 'task.display_name.hint',
          default: '',
          readonly: true,
          repeated: false,
          options: { list: [], flags: null },
        },
        constraints: null,
      },
      description: {
        type: 'string',
        description: 'Short task description',
        __proto: { number: 3 },
        __ui: { component: '', flags: [], no_init: false, no_skip: false },
        meta: {
          label: 'task.desc.label',
          hint: '',
          default: '',
          readonly: false,
          repeated: false,
          options: { list: [], flags: null },
        },
        constraints: {
          required: { is: 'true', message: 'is required' },
          max: { is: 180, message: 'task.desc.maxlength' },
        },
      },
      estimated_time: {
        type: 'int32',
        description: 'Estimated time in days',
        __proto: { number: 4 },
        __ui: { component: '', flags: [], no_init: false, no_skip: false },
        meta: {
          label: 'Est. days',
          hint: '',
          default: '',
          readonly: false,
          repeated: false,
          options: { list: [], flags: null },
        },
        constraints: null,
      },
      owner: {
        type: 'furo.Reference',
        description: 'Owner of a task',
        __proto: { number: 5 },
        __ui: { component: '', flags: [], no_init: false, no_skip: false },
        meta: {
          label: 'person.type.sex.label',
          hint: '',
          default: {
            link: {
              rel: 'list',
              href: '/mockdata/persons/list.json',
              method: 'GET',
              type: 'person.Person',
              service: 'PersonService',
            },
          },
          readonly: false,
          repeated: false,
          options: {
            list: [
              {
                id: 'unknown',
                display_name: 'person.type.sex.unknown.label',
                selected: false,
                '@type': 'type.googleapis.com/furo.Optionitem',
              },
              {
                id: 'female',
                display_name: 'person.type.sex.female.label',
                selected: true,
                '@type': 'type.googleapis.com/furo.Optionitem',
              },
              {
                id: 'male',
                display_name: 'person.type.sex.male.label',
                selected: false,
                '@type': 'type.googleapis.com/furo.Optionitem',
              },
            ],
            flags: null,
          },
        },
        constraints: null,
      },
      subtasks: {
        type: 'task.Task',
        description: 'List of subtasks',
        __proto: { number: 6 },
        __ui: { component: '', flags: [], no_init: false, no_skip: false },
        meta: {
          label: 'Subtask',
          hint: '',
          default: '',
          readonly: false,
          repeated: true,
          options: { list: [], flags: null },
        },
        constraints: null,
      },
    },
  },
  'furo.Reference': {
    name: 'reference',
    type: 'Reference',
    description: 'reference',
    __proto: { package: 'furo', imports: ['furo/link.proto'], targetfile: 'reference.proto' },
    fields: {
      display_name: {
        description: 'String representation of the reference',
        type: 'string',
        meta: { readonly: true },
        constraints: {},
        __proto: { number: 1 },
      },
      id: { description: 'Id of the reference', type: 'string', __proto: { number: 2 } },
      link: { description: 'Hateoas link', type: 'furo.Link', __proto: { number: 3 } },
    },
  },
  'furo.MetaField': {
    name: 'metafield',
    type: 'MetaField',
    description: 'fields of meta info',
    __proto: { package: 'furo', imports: [], targetfile: 'meta.proto' },
    fields: {
      meta: {
        description: 'meta information of a field',
        type: 'furo.FieldMeta',
        __proto: { number: 1 },
      },
      constraints: {
        description: 'constraints for a field',
        type: 'map<string,furo.FieldConstraint>',
        __proto: { number: 2 },
      },
    },
  },
  'furo.StringOptionProperty': {
    name: 'string_option_property',
    type: 'StringOptionProperty',
    description: 'String type to use in property',
    __proto: { package: 'furo', imports: [], targetfile: 'property.proto' },
    fields: {
      display_name: {
        description: 'String representation of val',
        type: 'string',
        meta: { readonly: true },
        constraints: {},
        __proto: { number: 1 },
      },
      id: {
        description: 'The value, Id is used to make working with data-inputs easier',
        type: 'string',
        __proto: { number: 2 },
      },
    },
  },
  'furo.Optionitem': {
    name: 'optionitem',
    type: 'Optionitem',
    description: 'Items for fieldoption.list',
    __proto: { package: 'furo', targetfile: 'meta.proto', imports: [], options: null },
    fields: {
      id: {
        type: 'string',
        description: 'Id',
        __proto: { number: 1 },
        __ui: { component: '', flags: [], no_init: false, no_skip: true },
        meta: {
          label: 'Id',
          hint: '',
          default: '',
          readonly: false,
          repeated: false,
          options: { list: [] },
        },
        constraints: null,
      },
      display_name: {
        type: 'string',
        description: 'String representation',
        __proto: { number: 2 },
        __ui: { component: '', flags: [], no_init: false, no_skip: true },
        meta: {
          label: 'Display name',
          hint: '',
          default: '',
          readonly: false,
          repeated: false,
          options: { list: [] },
        },
        constraints: null,
      },
      selected: {
        type: 'bool',
        description: 'is the item selected',
        __proto: { number: 3 },
        __ui: { component: '', flags: [], no_init: false, no_skip: false },
        meta: {
          label: 'Selected',
          hint: '',
          default: '',
          readonly: false,
          repeated: false,
          options: { list: [] },
        },
        constraints: null,
      },
    },
  },
  'furo.NumberProperty': {
    name: 'number_property',
    type: 'NumberProperty',
    description: 'Number type with embedded meta',
    __proto: { package: 'furo', imports: [], targetfile: 'property.proto' },
    fields: { data: { description: 'data part', type: 'float', __proto: { number: 1 } } },
  },
  'furo.Fieldoption': {
    name: 'fieldoption',
    type: 'Fieldoption',
    description: 'Metas for a field',
    __proto: {
      package: 'furo',
      targetfile: 'meta.proto',
      imports: ['google/protobuf/any.proto'],
      options: null,
    },
    fields: {
      list: {
        type: 'google.protobuf.Any',
        description: 'a list with options, use furo.optionitem or your own',
        __proto: { number: 1 },
        __ui: { component: '', flags: ['full', 'condensed'], no_init: false, no_skip: false },
        meta: {
          label: '',
          hint: '',
          default: '',
          readonly: false,
          repeated: true,
          options: { list: [], flags: null },
        },
        constraints: null,
      },
      flags: {
        type: 'string',
        description:
          'Add flags for your field. This can be something like "searchable". \n//The flags can be used by generators, ui components,...\n',
        __proto: { number: 2 },
        __ui: { component: null, flags: [], no_init: false, no_skip: false },
        meta: {
          label: 'flags',
          hint: 'optional flags',
          default: null,
          readonly: false,
          repeated: true,
          options: { list: [], flags: null },
          typespecific: null,
        },
        constraints: null,
      },
    },
  },
  'furo.StringProperty': {
    name: 'string_property',
    type: 'StringProperty',
    description: 'String type to use in property',
    __proto: { package: 'furo', imports: ['furo/meta.proto'], targetfile: 'property.proto' },
    fields: { data: { description: 'data part', type: 'string', __proto: { number: 1 } } },
  },
  'furo.Meta': {
    name: 'meta',
    type: 'Meta',
    description: 'meta info',
    __proto: { package: 'furo', imports: [], targetfile: 'meta.proto' },
    fields: {
      fields: {
        description: 'fields of meta info',
        type: 'map<string, furo.MetaField>',
        __proto: { number: 1 },
      },
    },
  },
  'furo.IntegerProperty': {
    name: 'integer_property',
    type: 'IntegerProperty',
    description: 'Integer type with embedded meta',
    __proto: { package: 'furo', imports: [], targetfile: 'property.proto' },
    fields: {
      data: {
        description: 'Integer data part',
        type: 'int32',
        constraints: { step: { is: 1 } },
        __proto: { number: 1 },
      },
    },
  },
  'furo.Link': {
    name: 'link',
    type: 'Link',
    description: 'link',
    __proto: { package: 'furo', imports: [], targetfile: 'link.proto' },
    fields: {
      rel: { description: 'the relationship', type: 'string', __proto: { number: 1 } },
      method: { description: 'method of curl', type: 'string', __proto: { number: 2 } },
      href: { description: 'link', type: 'string', __proto: { number: 3 } },
      type: { description: 'mime type', type: 'string', __proto: { number: 4 } },
      service: {
        description: 'name of the service which can handle this link',
        type: 'string',
        __proto: { number: 5 },
      },
    },
  },
  'furo.FieldMeta': {
    name: 'fieldmeta',
    type: 'FieldMeta',
    description: 'Metas for a field',
    __proto: {
      package: 'furo',
      options: {},
      imports: ['google/protobuf/any.proto'],
      targetfile: 'meta.proto',
    },
    fields: {
      label: {
        description: 'The label',
        type: 'string',
        meta: { label: 'Label', hint: 'Also used for input-fields' },
        __proto: { number: 1 },
      },
      hint: {
        description: 'A hint',
        type: 'string',
        meta: { label: 'Hint', hint: 'Also used for input-fields' },
        __proto: { number: 2 },
      },
      default: {
        description: 'The default value as JSON string',
        type: 'string',
        meta: { label: 'Default value' },
        __proto: { number: 3 },
      },
      readonly: {
        description: 'readonly',
        type: 'bool',
        meta: { label: 'readonly' },
        __proto: { number: 4 },
      },
      repeated: {
        description: 'repeated',
        type: 'bool',
        meta: { label: 'repeated' },
        __proto: { number: 5 },
      },
      options: {
        description: 'Fieldoptions',
        type: 'furo.Fieldoption',
        meta: { label: 'options' },
        __proto: { number: 6 },
      },
      typespecific: {
        description: 'Put in type specific metas for your fields here',
        type: 'google.protobuf.Any',
        meta: { label: 'typespecific meta' },
        __proto: { number: 7 },
        __ui: { no_init: true },
      },
    },
  },
  'furo.FieldConstraint': {
    name: 'fieldconstraint',
    type: 'FieldConstraint',
    description: 'a single fieldconstraint',
    __proto: { package: 'furo', options: {}, imports: [], targetfile: 'meta.proto' },
    fields: {
      is: {
        description: 'the constraint value as string, even it is a number',
        type: 'string',
        meta: { label: 'is', hint: 'the constraint value as string, even it is a number' },
        __proto: { number: 1 },
      },
      message: {
        description: 'The message to display on constraint violation',
        type: 'string',
        meta: { label: 'message' },
        __proto: { number: 2 },
      },
    },
  },
  'furo.BigDecimal': {
    name: 'big_decimal',
    type: 'BigDecimal',
    description:
      'A BigDecimal is defined by two values: an arbitrary precision integer and a 32-bit integer scale. The value of the BigDecimal is defined to be unscaledValue*10^{-scale}.',
    __proto: { package: 'furo', imports: [], targetfile: 'bigdecimal.proto' },
    fields: {
      display_name: {
        description: 'String representation of BigDecimal entity',
        type: 'string',
        meta: { readonly: true },
        constraints: {},
        options: [],
        __proto: { number: 1 },
      },
      scale: {
        description:
          'If zero or positive, the scale is the number of digits to the right of the decimal point. If negative, the unscaled value of the number is multiplied by ten to the power of the negation of the scale. For example, a scale of -3 means the unscaled value is multiplied by 1000.',
        type: 'int32',
        meta: {},
        constraints: {},
        options: [],
        __proto: { number: 2 },
      },
      int_val: {
        description: 'The integer value of the BigDecimal',
        type: 'int64',
        meta: {},
        constraints: {},
        options: [],
        __proto: { number: 3 },
      },
    },
  },
  'furo.Property': {
    name: 'property',
    type: 'Property',
    description: 'Type to define property values with type information',
    __proto: {
      package: 'furo',
      imports: ['google/protobuf/any.proto'],
      targetfile: 'property.proto',
    },
    fields: {
      id: {
        description: 'Id of the property',
        type: 'string',
        meta: { label: 'Id' },
        constraints: { required: { is: 'true', message: 'is required' } },
        __proto: { number: 1 },
      },
      display_name: {
        description: 'String representation of the property',
        type: 'string',
        meta: { label: 'Property', readonly: true },
        constraints: {},
        __proto: { number: 2 },
      },
      data: {
        description: 'data part of the property',
        type: 'google.protobuf.Any',
        constraints: {},
        __proto: { number: 3 },
      },
      meta: { description: 'Meta for the response', type: 'furo.Meta', __proto: { number: 4 } },
      code: {
        description: 'property code for additional settings',
        type: 'string',
        __proto: { number: 5 },
      },
    },
  },
  'google.type.Money': {
    name: 'money',
    type: 'Money',
    description:
      'Represents an amount of money with its currency type. https://github.com/googleapis/googleapis/blob/master/google/money.proto',
    __proto: { package: 'google.type', imports: [], targetfile: 'money.proto' },
    fields: {
      display_name: {
        description: 'String representation of money entity',
        type: 'string',
        meta: { default: '', hint: '', readonly: true },
        constraints: {},
        options: [],
        __proto: { number: 1 },
      },
      currency_code: {
        description: 'The 3-letter currency code defined in ISO 4217.',
        type: 'string',
        meta: { label: 'Währungscode', default: '', hint: '' },
        constraints: {},
        options: [],
        __proto: { number: 2 },
      },
      units: {
        description: 'The whole units of the amount.',
        type: 'int64',
        meta: { label: 'Ganzahliger Währungsbetrag', default: '', hint: '' },
        constraints: {},
        options: [],
        __proto: { number: 3 },
      },
      nanos: {
        description:
          'Number of nano (10^-9) units of the amount. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.',
        type: 'int64',
        meta: { label: 'Nanos', default: '', hint: '' },
        constraints: {},
        options: [],
        __proto: { number: 4 },
      },
    },
  },
  'google.type.Date': {
    name: 'date',
    type: 'Date',
    description: 'Date, https://github.com/googleapis/googleapis/blob/master/google/date.proto ',
    __proto: { package: 'google.type', imports: [], targetfile: 'date.proto' },
    fields: {
      display_name: {
        description: 'Localized String representation of date',
        type: 'string',
        meta: { label: 'Datum', default: '', hint: '', readonly: true },
        constraints: {},
        options: [],
        __proto: { number: 4 },
      },
      year: {
        description:
          'Year of date. Must be from 1 to 9999, or 0 if specifying a date without a year.',
        type: 'int32',
        meta: { default: '', hint: '' },
        constraints: {},
        options: [],
        __proto: { number: 1 },
      },
      month: {
        description:
          'Month of year. Must be from 1 to 12, or 0 if specifying a year without a month and day.',
        type: 'int32',
        meta: { default: '', hint: '' },
        constraints: {},
        options: [],
        __proto: { number: 2 },
      },
      day: {
        description:
          'Day of month. Must be from 1 to 31 and valid for the year and month, or 0. if specifying a year by itself or a year and month where the day is not significant.',
        type: 'int32',
        meta: { default: '', hint: '' },
        constraints: {},
        options: [],
        __proto: { number: 3 },
      },
    },
  },
  'google.protobuf.StringValue': {
    name: 'stringvalue',
    type: 'StringValue',
    description:
      'Wrapper message for `string`.  https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/wrappers.proto',
    __proto: { package: 'google.protobuf', options: {}, imports: [], targetfile: 'wrappers.proto' },
    fields: {
      value: {
        description: 'The JSON representation for `StringValue` is JSON string',
        type: 'string',
        __proto: { number: 1 },
      },
    },
  },
  'google.protobuf.FieldMask': {
    name: 'field_mask',
    type: 'FieldMask',
    description:
      'A field mask in update operations specifies which fields of the targeted resource are going to be updated. https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/field_mask.proto',
    __proto: {
      package: 'google.protobuf',
      options: {},
      imports: [],
      targetfile: 'field_mask.proto',
    },
    fields: {
      paths: {
        description:
          'The implementation of any API method which has a FieldMask type field in the request should verify the included field paths, and return an `INVALID_ARGUMENT` error if any path is duplicated or unmappable.',
        type: 'string',
        meta: { repeated: true },
        __proto: { number: 1 },
      },
    },
  },
  'google.protobuf.Int64Value': {
    name: 'int64value',
    type: 'Int64Value',
    description:
      'Wrapper message for `int64`.  https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/wrappers.proto',
    __proto: { package: 'google.protobuf', options: {}, imports: [], targetfile: 'wrappers.proto' },
    fields: {
      value: {
        description: 'The JSON representation for `Int64Value` is JSON string',
        type: 'int64',
        __proto: { number: 1 },
      },
    },
  },
  'google.protobuf.Empty': {
    name: 'empty',
    type: 'Empty',
    description: 'https://github.com/protocolbuffers/protobuf/blob/master/src/protobuf/empty.proto',
    __proto: { package: 'google.protobuf', imports: [], targetfile: 'empty.proto', options: {} },
    fields: {},
  },
  'google.protobuf.Int32Value': {
    name: 'int32value',
    type: 'Int32Value',
    description:
      'Wrapper message for `int32`.  https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/wrappers.proto',
    __proto: { package: 'google.protobuf', options: {}, imports: [], targetfile: 'wrappers.proto' },
    fields: {
      value: {
        description: 'The JSON representation for `Int32Value` is JSON number',
        type: 'int32',
        __proto: { number: 1 },
        constraints: {
          min: { is: '−2147483648', message: 'out of range' },
          max: { is: '2147483647', message: 'out of range' },
        },
      },
    },
  },
  'google.protobuf.BoolValue': {
    name: 'boolvalue',
    type: 'BoolValue',
    description:
      'Wrapper message for `bool`.  https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/wrappers.proto',
    __proto: { package: 'google.protobuf', options: {}, imports: [], targetfile: 'wrappers.proto' },
    fields: {
      value: {
        description: 'The JSON representation for `BoolValue` is JSON `true` and `false`',
        type: 'bool',
        __proto: { number: 1 },
      },
    },
  },
  'google.protobuf.FloatValue': {
    name: 'floatvalue',
    type: 'FloatValue',
    description:
      'Wrapper message for `float`.  https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/wrappers.proto',
    __proto: { package: 'google.protobuf', options: {}, imports: [], targetfile: 'wrappers.proto' },
    fields: {
      value: {
        description: 'The JSON representation for `FloatValue` is JSON number',
        type: 'float',
        __proto: { number: 1 },
      },
    },
  },
  'google.protobuf.BytesValue': {
    name: 'bytesvalue',
    type: 'BytesValue',
    description:
      'Wrapper message for `bytes`.  https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/wrappers.proto',
    __proto: { package: 'google.protobuf', options: {}, imports: [], targetfile: 'wrappers.proto' },
    fields: {
      value: {
        description: 'The JSON representation for `BytesValue` is JSON string',
        type: 'bytes',
        __proto: { number: 1 },
      },
    },
  },
  'google.protobuf.Any': {
    name: 'any',
    type: 'Any',
    description:
      'Any contains an arbitrary serialized protocol buffer message along with a\n// URL that describes the type of the serialized message. client uses type `ArrayBuffer` for the value field .  https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/any.proto',
    __proto: { package: 'google.protobuf', options: {}, imports: [], targetfile: 'any.proto' },
    fields: {
      type_url: { type: 'string', __proto: { number: 1 } },
      value: { type: 'bytes', __proto: { number: 2 } },
    },
  },
  'google.protobuf.UInt32Value': {
    name: 'uint32value',
    type: 'UInt32Value',
    description:
      'Wrapper message for `uint32`.  https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/wrappers.proto',
    __proto: { package: 'google.protobuf', options: {}, imports: [], targetfile: 'wrappers.proto' },
    fields: {
      value: {
        description: 'The JSON representation for `UInt32Value` is JSON number',
        type: 'uint32',
        __proto: { number: 1 },
      },
    },
  },
  'google.protobuf.UInt64Value': {
    name: 'uint64value',
    type: 'UInt64Value',
    description:
      'Wrapper message for `uint64`.  https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/wrappers.proto',
    __proto: { package: 'google.protobuf', options: {}, imports: [], targetfile: 'wrappers.proto' },
    fields: {
      value: {
        description: 'The JSON representation for `UInt64Value` is JSON string',
        type: 'uint64',
        __proto: { number: 1 },
      },
    },
  },
  'google.protobuf.DoubleValue': {
    name: 'doublevalue',
    type: 'DoubleValue',
    description:
      'Wrapper message for `double`.  https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/wrappers.proto',
    __proto: { package: 'google.protobuf', options: {}, imports: [], targetfile: 'wrappers.proto' },
    fields: {
      value: {
        description: 'The JSON representation for `DoubleValue` is JSON number',
        type: 'double',
        __proto: { number: 1 },
      },
    },
  },
};
