# GoHighLevel SDK for JavaScript

![NPM Version](https://img.shields.io/npm/v/ghl-sdk)
![GitHub License](https://img.shields.io/github/license/adkonghq/ghl-sdk)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/adkonghq/ghl-sdk/master)

## Installation  
```bash  
npm install ghl-sdk  
```
```bash   
yarn add ghl-sdk  
```
```bash  
pnpm add ghl-sdk  
``` 
## Overview
The library is organized into distinct client modules — each responsible for a specific set of API interactions aligned with the structure described in official GHL API documentation. For example, the ```OAuthClient``` handles authentication and token management, while the ```LocationsClient``` encapsulates the location-specific endpoints. Both [type definitions](https://adkonghq.github.io/ghl-sdk/) and retry logic are included. The pagination should be considered separately for each particular method and use case as there is no consistency across different modules of the underlying GHL API.

## Quick Start
```typescript  
import { OAuthClient, LocationsClient, FormsClient } from 'ghl-sdk';  

// Replace this with your own valid GHL credentials
const client_id = '64720d51b50eb849194247ce-lzdnsr6z';
const client_secret = '5060d220-a031-4f39-9cr0-0424e08ffba5';
const grant_type = 'authorization_code';
const user_type = 'Location';
const code = '86b68a0da12ba59f9a85abf2f5bafde171321bdd';
const locationId = 've9EPM428h8vShlRW1KT';

// Exchange OAuth code for access token
const oauthClient = new OAuthClient();
const { access_token } = await oauthClient.getAccessToken({
  client_id,
  client_secret,
  grant_type,
  user_type,
  code,
});

// Fetch location details
const locationsClient = new LocationsClient(accessToken);
const { location } = await locationsClient.findById(locationId);  
console.log(location.name);  

// Fetch the available forms for location
const formsClient = new FormsClient(accessToken);
const { forms, total } = await formsClient.find({ locationId, limit: 100 });
console.log(`Fetched ${forms.length} forms out of ${total}`);
```

## Client Modules
Here's the list of all available client modules and their methods in relation to the official GoHighLevel API documentation. All the type definition details can be found on the auto-generated [typedoc pages](https://adkonghq.github.io/ghl-sdk/).

### BlogsClient
| Client Method | API Documentation Reference |
|---------------|-----------------------------|
| `findAuthors` | [Get All Authors](https://highlevel.stoplight.io/docs/integrations/2ad8896e803e7-get-all-authors) |
| `findCategories` | [Get All Categories](https://highlevel.stoplight.io/docs/integrations/8ebd3128ee462-get-all-categories) |
| `checkSlug` | [Check Url Slug](https://highlevel.stoplight.io/docs/integrations/12bccbf6f8881-check-url-slug) |
| `create` | [Create Blog Post](https://highlevel.stoplight.io/docs/integrations/c24ff055e7cf8-create-blog-post) |
| `update` | [Update Blog Post](https://highlevel.stoplight.io/docs/integrations/9ac5fb40f9fb4-update-blog-post) |

### BusinessesClient
| Client Method | API Documentation Reference |
|---------------|-----------------------------|
| `findByLocation` | [Get Businesses By Location](https://highlevel.stoplight.io/docs/integrations/a8db8afcbe0a3-get-businesses-by-location) |
| `findById` | [Get Business](https://highlevel.stoplight.io/docs/integrations/7530dceccc379-get-business) |
| `create` | [Create Business](https://highlevel.stoplight.io/docs/integrations/7636876b20ac3-create-business) |
| `update` | [Update Business](https://highlevel.stoplight.io/docs/integrations/b95210ff2a8d7-update-business) |
| `remove` | [Delete Business](https://highlevel.stoplight.io/docs/integrations/6f776fbd6dd1f-delete-business) |

### CalendarsClient
| Client Method | API Documentation Reference |
|---------------|-----------------------------|
| `find` | [Get Calendars](https://highlevel.stoplight.io/docs/integrations/e55dec1be7bee-get-calendars) |
| `findById` | [Get Calendar](https://highlevel.stoplight.io/docs/integrations/946f5e91e2532-get-calendar) |
| `create` | [Create Calendar](https://highlevel.stoplight.io/docs/integrations/db6affea7570b-create-calendar) |
| `update` | [Update Calendar](https://highlevel.stoplight.io/docs/integrations/cf683b1696d31-update-calendar) |
| `remove` | [Delete Calendar](https://highlevel.stoplight.io/docs/integrations/57177f7074647-delete-calendar) |
| `findFreeSlots` | [Get Free Slots](https://highlevel.stoplight.io/docs/integrations/7f694ee8bd969-get-free-slots) |
| `findGroups` | [Get Groups](https://highlevel.stoplight.io/docs/integrations/89e47b6c05e67-get-groups) |
| `createGroup` | [Create Calendar Group](https://highlevel.stoplight.io/docs/integrations/fefceb241288c-create-calendar-group) |
| `validateGroupSlug` | [Validate Group Slug](https://highlevel.stoplight.io/docs/integrations/afefaa9b33ca0-validate-group-slug) |
| `removeGroup` | [Delete Group](https://highlevel.stoplight.io/docs/integrations/e8c53752f025d-delete-group) |
| `updateGroup` | [Update Group](https://highlevel.stoplight.io/docs/integrations/585481332e909-update-group) |
| `updateGroupStatus` | [Disable Group](https://highlevel.stoplight.io/docs/integrations/aed8aeb313d97-disable-group) |
| `findEvents`| [Get Calendar Events](https://highlevel.stoplight.io/docs/integrations/a83f44a3112a4-get-calendar-events) |
| `findBlockedSlots`| [Get Blocked Slots](https://highlevel.stoplight.io/docs/integrations/e31320c70cfde-get-blocked-slots) |
| `findAppointmentById` | [Get Appointment](https://highlevel.stoplight.io/docs/integrations/bc4114ff64e38-get-appointment) |
| `updateAppointment` | [Update Appointment](https://highlevel.stoplight.io/docs/integrations/3a1380a3a9df8-update-appointment) |
| `createAppointment` | [Create Appointment](https://highlevel.stoplight.io/docs/integrations/a192f863cad27-create-appointment) |
| `createBlockSlot` | [Create Block Slot](https://highlevel.stoplight.io/docs/integrations/5a52896a68879-create-block-slot) |
| `updateBlockSlot` | [Update Block Slot](https://highlevel.stoplight.io/docs/integrations/098186acbb8db-update-block-slot) |
| `removeEvent` | [Delete Event](https://highlevel.stoplight.io/docs/integrations/96b85108e6d3b-delete-event) |
| `findAppointmentNotes` | [Get Notes](https://highlevel.stoplight.io/docs/integrations/e04d0822bd613-get-notes) |
| `createAppointmentNote` | [Create Note](https://highlevel.stoplight.io/docs/integrations/dcdda866d8b49-create-note) |
| `updateAppointmentNote` | [Update Note](https://highlevel.stoplight.io/docs/integrations/f27408b1ae367-update-note) |
| `removeAppointmentNote` | [Delete Note](https://highlevel.stoplight.io/docs/integrations/fe10a2bff1674-delete-note) |
| `findResourceById` | [Get Calendar Resource](https://highlevel.stoplight.io/docs/integrations/146912d6a9c38-get-calendar-resource) |
| `updateResource` | [Update Calendar Resource](https://highlevel.stoplight.io/docs/integrations/20987bed71eb0-update-calendar-resource) |
| `deleteResource` | [Delete Calendar Resource](https://highlevel.stoplight.io/docs/integrations/ca9afd52d4d0e-delete-calendar-resource) |
| `findResourcesByType` | [List Calendar Resources](https://highlevel.stoplight.io/docs/integrations/e3a7d63a0134b-list-calendar-resources) |
| `createCalendarResource` | [Create Calendar Resource](https://highlevel.stoplight.io/docs/integrations/cad3af068e0e0-create-calendar-resource) |

### CampaignsClient
| Client Method | API Documentation Reference |
|---------------|-----------------------------|
| `find` | [Get Campaigns](https://highlevel.stoplight.io/docs/integrations/6e067fcb430b7-get-campaigns) |

### CompaniesClient
| Client Method | API Documentation Reference |
|---------------|-----------------------------|
| `findById` | [Get Company](https://highlevel.stoplight.io/docs/integrations/cc7b8a7892119-get-company) |

### ContactsClient
| Client Method | API Documentation Reference |
|---------------|-----------------------------|
| `findById` | [Get Contact](https://highlevel.stoplight.io/docs/integrations/00c5ff21f0030-get-contact) |
| `update` | [Update Contact](https://highlevel.stoplight.io/docs/integrations/9ce5a739d4fb9-update-contact) |
| `remove` | [Delete Contact](https://highlevel.stoplight.io/docs/integrations/28ab84e9522b6-delete-contact) |
| `upsert` | [Upsert Contact](https://highlevel.stoplight.io/docs/integrations/f71bbdd88f028-upsert-contact) |
| `findByBusiness` | [Get Contacts By BusinessId](https://highlevel.stoplight.io/docs/integrations/8efc6d5a99417-get-contacts-by-business-id) |
| `create` | [Create Contact](https://highlevel.stoplight.io/docs/integrations/4c8362223c17b-create-contact) |
| `find` | [Get Contacts](https://highlevel.stoplight.io/docs/integrations/ab55933a57f6f-get-contacts) |
| `findTasks` | [Get All Tasks](https://highlevel.stoplight.io/docs/integrations/db572d519b209-get-all-tasks) |
| `createTask` | [Create Task](https://highlevel.stoplight.io/docs/integrations/fa57d1470b87c-create-task) |
| `findTaskById` | [Get Task](https://highlevel.stoplight.io/docs/integrations/c4d36fb259656-get-task) |
| `updateTask` | [Update Task](https://highlevel.stoplight.io/docs/integrations/82e1223e90ec9-update-task) |
| `removeTask` | [Delete Task](https://highlevel.stoplight.io/docs/integrations/506ee1741ec7e-delete-task) |
| `updateTaskStatus` | [Update Task Completed](https://highlevel.stoplight.io/docs/integrations/b03d53971d208-update-task-completed) |
| `findAppointments` | [Get Appointments For Contact](https://highlevel.stoplight.io/docs/integrations/6015cf49a7ae8-get-appointments-for-contact) |
| `addTags` | [Add Tags](https://highlevel.stoplight.io/docs/integrations/c9bbad7cdacf5-add-tags) |
| `removeTags` | [Remove Tags](https://highlevel.stoplight.io/docs/integrations/e5d269b7415bf-remove-tags) |
| `findNotes` | [Get All Notes](https://highlevel.stoplight.io/docs/integrations/73decb4b6d0c2-get-all-notes) |
| `createNote` | [Create Notes](https://highlevel.stoplight.io/docs/integrations/5eab1684a9948-create-note) |
| `findNoteById` | [Get Note](https://highlevel.stoplight.io/docs/integrations/24cab1c2b3dfb-get-note) |
| `updateNote` | [Get Note](https://highlevel.stoplight.io/docs/integrations/71814e115658f-update-note) |
| `removeNote` | [Delete Note](https://highlevel.stoplight.io/docs/integrations/d7e867be69e9f-delete-note) |
| `addToCampaign` | [Add Contact To Campaign](https://highlevel.stoplight.io/docs/integrations/ecf9b5b45deaf-add-contact-to-campaign) |
| `removeFromCampaign` | [Remove Contact From Campaign](https://highlevel.stoplight.io/docs/integrations/e88fc8bf2a781-remove-contact-from-campaign) |
| `removeFromEveryCampaign` | [Remove Contact From Every Campaign](https://highlevel.stoplight.io/docs/integrations/e9642e2d8bc8a-remove-contact-from-every-campaign) |
| `addToWorkflow` | [Add Contact To Workflow](https://highlevel.stoplight.io/docs/integrations/fe0f421553a9e-add-contact-to-workflow) |
| `addRemoveFromBusiness` | [Add/Remove Contacts From Business](https://highlevel.stoplight.io/docs/integrations/c37a9d47b1f0c-add-remove-contacts-from-business) |
| `search` | [Search Contacts](https://highlevel.stoplight.io/docs/integrations/dbe4f3a00a106-search-contacts) |
| `findDuplicates` | [Get Duplicate Contact](https://highlevel.stoplight.io/docs/integrations/e30c4ea85d5f8-get-duplicate-contact) |
| `addFollowers` | [Add Followers](https://highlevel.stoplight.io/docs/integrations/d6499bc9a04e7-add-followers) |
| `removeFollowers` | [Remove Followers](https://highlevel.stoplight.io/docs/integrations/6c2659991d43c-remove-followers) |

### ConversationsClient
| Client Method | API Documentation Reference |
|---------------|-----------------------------|
| `findById` | [Get Conversation](https://highlevel.stoplight.io/docs/integrations/d22efcfdb0c80-get-conversation) |
| `update` | [Update Conversation](https://highlevel.stoplight.io/docs/integrations/f6c7d276afe8e-update-conversation) |
| `remove` | [Delete Conversation](https://highlevel.stoplight.io/docs/integrations/d6b698c33ff49-delete-conversation) |
| `create` | [Create Conversation](https://highlevel.stoplight.io/docs/integrations/8d0b19e09176e-create-conversation) |
| `search` | [Search Conversations](https://highlevel.stoplight.io/docs/integrations/d45ae3189eea8-search-conversations) |
| `findEmailById` | [Get Email By Id](https://highlevel.stoplight.io/docs/integrations/9b36d7004312c-get-email-by-id) |
| `cancelScheduledEmail` | [Cancel A Scheduled Email Message](https://highlevel.stoplight.io/docs/integrations/de6b358b5db79-cancel-a-scheduled-email-message) |
| `findMessageById` | [Get Message By Message Id](https://highlevel.stoplight.io/docs/integrations/a503551cadede-get-message-by-message-id) |
| `findMessagesByConversationId` | [Get Messages By Conversation Id](https://highlevel.stoplight.io/docs/integrations/ab21134dad173-get-messages-by-conversation-id) |
| `sendMessage` | [Send A New Message](https://highlevel.stoplight.io/docs/integrations/5853cb0a54971-send-a-new-message) |
| `addInboundMessage` | [Add An Inbound Message](https://highlevel.stoplight.io/docs/integrations/3c9036411fcc3-add-an-inbound-message) |
| `addOutboundMessage` | [Add An External Outbound Call](https://highlevel.stoplight.io/docs/integrations/d032812b4e850-add-an-external-outbound-call) |
| `cancelScheduledMessage` | [Cancel A Scheduled Message](https://highlevel.stoplight.io/docs/integrations/f7e0bc96bf0a4-cancel-a-scheduled-message) |
| `uploadFileAttachments` | [Upload File Attachments](https://highlevel.stoplight.io/docs/integrations/cd0f7973ec1b6-upload-file-attachments) |
| `updateMessageStatus` | [Update Message Status](https://highlevel.stoplight.io/docs/integrations/4518573836035-update-message-status) |
| `findMessageRecording` | [Get Recording By Message ID](https://highlevel.stoplight.io/docs/integrations/72f801089fbac-get-recording-by-message-id) |
| `findMessageTranscription` | [Get Transcription By Message ID](https://highlevel.stoplight.io/docs/integrations/9f8e2c1696a55-get-transcription-by-message-id) |
| `downloadMessageTranscription` | [Download Transcription By Message ID](https://highlevel.stoplight.io/docs/integrations/2dfde1b5257fe-download-transcription-by-message-id) |

### CoursesClient
| Client Method | API Documentation Reference |
|---------------|-----------------------------|
| `import` | [Import Courses](https://highlevel.stoplight.io/docs/integrations/7ca9bb420fe98-import-courses) |

### CustomFieldsClient
| Client Method | API Documentation Reference |
|---------------|-----------------------------|
| `findById` | [Get Custom Field / Folder By Id](https://highlevel.stoplight.io/docs/integrations/e08551df3d324-get-custom-field-folder-by-id) |
| `update` | [Update Custom Field By Id](https://highlevel.stoplight.io/docs/integrations/0d21eea479ed7-update-custom-field-by-id) |
| `remove` | [Delete Custom Field By Id](https://highlevel.stoplight.io/docs/integrations/65ae8f7b10460-delete-custom-field-by-id) |
| `findByObjectKey` | [Get Custom Fields By Object Key](https://highlevel.stoplight.io/docs/integrations/33719c4eef9bd-get-custom-fields-by-object-key) |
| `createFolder` | [Create Custom Field Folder](https://highlevel.stoplight.io/docs/integrations/52e9e97f3c50a-create-custom-field-folder) |
| `updateFolder` | [Update Custom Field Folder Name](https://highlevel.stoplight.io/docs/integrations/0bd8bc7fd50ff-update-custom-field-folder-name) |
| `removeFolder` | [Delete Custom Field Folder](https://highlevel.stoplight.io/docs/integrations/ca8b8b09ee5a0-delete-custom-field-folder) |
| `create` | [Create Custom Field](https://highlevel.stoplight.io/docs/integrations/55c9675bf56ce-create-custom-field) |

### CustomMenusClient
| Client Method | API Documentation Reference |
|---------------|-----------------------------|
| `findById` | [Get Custom Menu Link](https://highlevel.stoplight.io/docs/integrations/61dd579c0eb32-get-custom-menu-link) |
| `remove` | [Delete Custom Menu Link](https://highlevel.stoplight.io/docs/integrations/8df5e4d2d798e-delete-custom-menu-link) |
| `update` | [Update Custom Menu Link](https://highlevel.stoplight.io/docs/integrations/5117e328cff1d-update-custom-menu-link) |
| `find` | [Get Custom Menu Links](https://highlevel.stoplight.io/docs/integrations/5a61f2f673169-get-custom-menu-links) |
| `create` | [Create Custom Menu Link](https://highlevel.stoplight.io/docs/integrations/74c33112ec16f-create-custom-menu-link) |

### EmailsClient
| Client Method | API Documentation Reference |
|---------------|-----------------------------|
| `create` | [Create A New Template](https://highlevel.stoplight.io/docs/integrations/cfa78da1d70d7-create-a-new-template) |
| `find` | [Fetch Email Templates](https://highlevel.stoplight.io/docs/integrations/16e00d8121cd0-fetch-email-templates) |
| `remove` | [Delete A Template](https://highlevel.stoplight.io/docs/integrations/58b2c8754cfcd-delete-a-template) |
| `update` | [Update A Template](https://highlevel.stoplight.io/docs/integrations/b506bedd25d5f-update-a-template) |

### FormsClient
| Client Method | API Documentation Reference |
|---------------|-----------------------------|
| `find` | [Get Forms](https://highlevel.stoplight.io/docs/integrations/49e29c1716c61-get-forms) |
| `updloadCustomFiles` | [Upload Files To Custom Fields](https://highlevel.stoplight.io/docs/integrations/2c0dba6197bcb-upload-files-to-custom-fields) |
| `findSubmissions` | [Get Forms Submissions](https://highlevel.stoplight.io/docs/integrations/a6114bd7685d1-get-forms-submissions) |

### FunnelsClient
| Client Method | API Documentation Reference |
|---------------|-----------------------------|
| `findFunnels` | [Fetch List Of Funnels](https://highlevel.stoplight.io/docs/integrations/80d7ad39f1e90-fetch-list-of-funnels) |
| `findPages` | [Fetch List Of Funnel Pages](https://highlevel.stoplight.io/docs/integrations/99a6409949f15-fetch-list-of-funnel-pages) |
| `countPages` | [Fetch Count Of Funnel Pages](https://highlevel.stoplight.io/docs/integrations/6bee319f931fa-fetch-count-of-funnel-pages) |
| `createRedirect` | [Create Redirect](https://highlevel.stoplight.io/docs/integrations/98aaa4819e58b-create-redirect) |
| `updateRedirect` | [Update Redirect By Id](https://highlevel.stoplight.io/docs/integrations/42c343d756316-update-redirect-by-id) |
| `removeRedirect` | [Delete Redirect By Id](https://highlevel.stoplight.io/docs/integrations/55c4fc25361eb-delete-redirect-by-id) |
| `findRedirects` | [Fetch List Of Redirects](https://highlevel.stoplight.io/docs/integrations/a1a9c79cd27ed-fetch-list-of-redirects) |

### InvoicesClient
| Client Method | API Documentation Reference |
|---------------|-----------------------------|
| `generateInvoiceNumber` | [Generate Invoice Number](https://highlevel.stoplight.io/docs/integrations/8e07202d2d38a-generate-invoice-number) |
| `findById` | [Get Invoice](https://highlevel.stoplight.io/docs/integrations/09ff1bc76ef48-get-invoice) |
| `update` | [Update Invoice](https://highlevel.stoplight.io/docs/integrations/76f00a800fa6e-update-invoice) |
| `remove` | [Delete Invoice](https://highlevel.stoplight.io/docs/integrations/af9fb9b428e74-delete-invoice) |
| `voidById` | [Void Invoice](https://highlevel.stoplight.io/docs/integrations/7b2e39e2399ba-void-invoice) |
| `send` | [Send Invoice](https://highlevel.stoplight.io/docs/integrations/dbcb9c72c2f7a-send-invoice) |
| `recordPayment` | [Record A Manual Payment For An Invoice](https://highlevel.stoplight.io/docs/integrations/a6854d15f651d-record-a-manual-payment-for-an-invoice) |
| `create` | [Create Invoice](https://highlevel.stoplight.io/docs/integrations/b2be804d8764c-create-invoice) |
| `find` | [List Invoices](https://highlevel.stoplight.io/docs/integrations/3cdfb8c2dd8d4-list-invoices) |
| `createTemplate` | [Create Template](https://highlevel.stoplight.io/docs/integrations/7cc0fad9bc3c0-create-template) |
| `findTemplates` | [List Templates](https://highlevel.stoplight.io/docs/integrations/2840a2faefb4f-list-templates) |
| `findTemplateById` | [Get An Template](https://highlevel.stoplight.io/docs/integrations/3bacd8c4310d2-get-an-template) |
| `updateTemplate` | [Update Template](https://highlevel.stoplight.io/docs/integrations/7467126c48049-update-template) |
| `removeTemplate` | [Delete Template](https://highlevel.stoplight.io/docs/integrations/caaab6a02e9ad-delete-template) |
| `createSchedule` | [Create Invoice Schedule](https://highlevel.stoplight.io/docs/integrations/aa147661cf568-create-invoice-schedule) |
| `findSchedules` | [List Schedules](https://highlevel.stoplight.io/docs/integrations/7619335efb7fe-list-schedules) |
| `findScheduleById` | [Get An Schedule](https://highlevel.stoplight.io/docs/integrations/ada2739ce720d-get-an-schedule) |
| `updateSchedule` | [Update Schedule](https://highlevel.stoplight.io/docs/integrations/44c1dd3a54f54-update-schedule) |
| `removeSchedule` | [Delete Schedule](https://highlevel.stoplight.io/docs/integrations/69c0d2ec4f403-delete-schedule) |
| `createScheduledInvoice` | [Schedule An Schedule Invoice](https://highlevel.stoplight.io/docs/integrations/af847027b0f7b-schedule-an-schedule-invoice) |
| `manageAutoPayment` | [Manage Auto payment For An Schedule Invoice](https://highlevel.stoplight.io/docs/integrations/34c4f33a09750-manage-auto-payment-for-an-schedule-invoice) |
| `cancelScheduledInvoice` | [Cancel An Scheduled Invoice](https://highlevel.stoplight.io/docs/integrations/dd5fcadbd3cfc-cancel-an-scheduled-invoice) |
| `createText2Pay` | [Create & Send](https://highlevel.stoplight.io/docs/integrations/e739c3a249591-create-and-send) |

### LCEmailClient 
| Client Method | API Documentation Reference |
|---------------|-----------------------------|
| `verify` | [Email Verification](https://highlevel.stoplight.io/docs/integrations/47a095a7cf1af-email-verification) |

### LinksClient
| Client Method | API Documentation Reference |
|---------------|-----------------------------|
| `update` | [Update Link](https://highlevel.stoplight.io/docs/integrations/7fb0921457bdb-update-link) |
| `remove` | [Delete Link](https://highlevel.stoplight.io/docs/integrations/b38b571ee30bd-delete-link) |
| `find` | [Get Links](https://highlevel.stoplight.io/docs/integrations/7b6e00ee0f653-get-links) |
| `create` | [Create Link](https://highlevel.stoplight.io/docs/integrations/30442546481af-create-link) |

### LocationsClient
| Client Method | API Documentation Reference |
|---------------|-----------------------------|
| `findById` | [Get Sub-Account (Formerly Location)](https://highlevel.stoplight.io/docs/integrations/d777490312af4-get-sub-account-formerly-location) |
| `update` | [Put Sub-Account (Formerly Location)](https://highlevel.stoplight.io/docs/integrations/cc00a2e3e4d70-put-sub-account-formerly-location) |
| `remove` | [Delete Sub-Account (Formerly Location)](https://highlevel.stoplight.io/docs/integrations/54dd4c281f465-delete-sub-account-formerly-location) |
| `create` | [Create Sub-Account (Formerly Location)](https://highlevel.stoplight.io/docs/integrations/7cfc7963eda7c-create-sub-account-formerly-location) |
| `search` | [Search](https://highlevel.stoplight.io/docs/integrations/12f3fb56990d3-search) |
| `findCustomFields` | [Get Custom Fields](https://highlevel.stoplight.io/docs/integrations/791462a3367b9-get-custom-fields) |
| `createCustomField` | [Create Custom Field](https://highlevel.stoplight.io/docs/integrations/7b2584aa2450c-create-custom-field) |
| `findCustomFieldById` | [Get Custom Field](https://highlevel.stoplight.io/docs/integrations/394d117ca4332-get-custom-field) |
| `updateCustomField` | [Update Custom Field](https://highlevel.stoplight.io/docs/integrations/a96e05f71bdf4-update-custom-field) |
| `removeCustomField` | [Delete Custom Field](https://highlevel.stoplight.io/docs/integrations/ca83b24e1ca24-delete-custom-field) |
| `uploadCustomFieldFile` | [Uploads File to customFields](https://highlevel.stoplight.io/docs/integrations/67af3120b5137-uploads-file-to-custom-fields) |
| `findCustomValues` | [Get Custom Values](https://highlevel.stoplight.io/docs/integrations/d40742c5e3e7d-get-custom-values) |
| `createCustomValue` | [Create Custom Value](https://highlevel.stoplight.io/docs/integrations/e0c3b7e6d196c-create-custom-value) |
| `findCustomValueById` | [Get Custom Value](https://highlevel.stoplight.io/docs/integrations/1c982c0816621-get-custom-value) |
| `updateCustomValue` | [Update Custom Value](https://highlevel.stoplight.io/docs/integrations/c5c9b99b0e74f-update-custom-value) |
| `removeCustomValue` | [Delete Custom Value](https://highlevel.stoplight.io/docs/integrations/40e00c29eb2da-delete-custom-value) |
| `findTemplates` | [GET all or email/sms templates](https://highlevel.stoplight.io/docs/integrations/2d66d23600a8b-get-all-or-email-sms-templates) |
| `removeTemplate` | [DELETE an email/sms template](https://highlevel.stoplight.io/docs/integrations/cdce8f8899efe-delete-an-email-sms-template) |
| `findTags` | [Get Tags](https://highlevel.stoplight.io/docs/integrations/00a65a984720b-get-tags) |
| `createTag` | [Create Tag](https://highlevel.stoplight.io/docs/integrations/64433faeaa52e-create-tag) |
| `findTagById` | [Get Tag By Id](https://highlevel.stoplight.io/docs/integrations/2be6f9044b427-get-tag-by-id) |
| `updateTag` | [Update Tag](https://highlevel.stoplight.io/docs/integrations/809b211aaf37a-update-tag) |
| `removeTag` | [Delete Tag](https://highlevel.stoplight.io/docs/integrations/8742f26722f45-delete-tag) |
| `searchTasks` | [Task Search Filter](https://highlevel.stoplight.io/docs/integrations/8d73480560089-task-search-filter) |
| `findTimezones` | [Fetch Timezones](https://highlevel.stoplight.io/docs/integrations/588e3c8407166-fetch-timezones) |

### MediaClient
| Client Method | API Documentation Reference |
|---------------|-----------------------------|
| `findFiles` | [Get List Of Files](https://highlevel.stoplight.io/docs/integrations/0a4bf8cac58a9-get-list-of-files) |
| `uploadFile` | [Upload File Into Media Library](https://highlevel.stoplight.io/docs/integrations/f737851451054-upload-file-into-media-library) |
| `deleteFile` | [Delete File Or Folder](https://highlevel.stoplight.io/docs/integrations/fb48a2a324010-delete-file-or-folder) |

### OAuthClient
| Client Method | API Documentation Reference |
|---------------|-----------------------------|
| `getAccessToken` | [Get Access Token](https://highlevel.stoplight.io/docs/integrations/00d0c0ecaa369-get-access-token) |
| `findInstalledLocations` | [Get Locations Where App Is Installed](https://highlevel.stoplight.io/docs/integrations/aeed19d08490e-get-location-where-app-is-installed) |
| `getLocationToken` | [Get Location Access Token From Agency Token](https://highlevel.stoplight.io/docs/integrations/1a30b217da571-get-location-access-token-from-agency-token) |

### ObjectsClient
| Client Method | API Documentation Reference |
|---------------|-----------------------------|
| `findByKey` | [Get Object Schema By Key / Id](https://highlevel.stoplight.io/docs/integrations/0053d02287ccd-get-object-schema-by-key-id) |
| `updateByKey` | [Update Object Schema By Key / Id](https://highlevel.stoplight.io/docs/integrations/91d899dc5c6ab-update-object-schema-by-key-id) |
| `findByLocation` | [Get All Objects For A Location](https://highlevel.stoplight.io/docs/integrations/cfa9cb74d2da6-get-all-objects-for-a-location) |
| `create` | [Create Custom Object](https://highlevel.stoplight.io/docs/integrations/ef91fb5866e4c-create-custom-object) |
| `findRecordById` | [Get Record By Id](https://highlevel.stoplight.io/docs/integrations/20afd7129e03a-get-record-by-id) |
| `updateRecord` | [Update Record](https://highlevel.stoplight.io/docs/integrations/b4c5fdbd3ec85-update-record) |
| `deleteRecord` | [Delete Record](https://highlevel.stoplight.io/docs/integrations/cf8c6919f1ddd-delete-record) |
| `createRecord` | [Create Record](https://highlevel.stoplight.io/docs/integrations/47e05e18c5d41-create-record) |
| `searchRecords` | [Search Object Records](https://highlevel.stoplight.io/docs/integrations/0d0d041fb90fb-search-object-records) |

### OpportunitiesClient
| Client Method | API Documentation Reference |
|---------------|-----------------------------|
| `findById` | [Get Opportunity](https://highlevel.stoplight.io/docs/integrations/31798edaafcba-get-opportunity) |
| `remove` | [Delete Opportunity](https://highlevel.stoplight.io/docs/integrations/11568af679dff-delete-opportunity) |
| `update` | [Update Opportunity](https://highlevel.stoplight.io/docs/integrations/ca75b3ab9e828-update-opportunity) |
| `updateStatus` | [Update Opportunity Status](https://highlevel.stoplight.io/docs/integrations/d595e6fa2b666-update-opportunity-status) |
| `upsert` | [Upsert Opportunity](https://highlevel.stoplight.io/docs/integrations/9df1c12e5da99-upsert-opportunity) |
| `create` | [Create Opportunity](https://highlevel.stoplight.io/docs/integrations/802093aa63900-create-opportunity) |
| `search` | [Search Opportunity](https://highlevel.stoplight.io/docs/integrations/a163e98c45b8d-search-opportunity) |
| `findPipelines` | [Get Pipelines](https://highlevel.stoplight.io/docs/integrations/927589990bc39-get-pipelines) |
| `addFollowers` | [Add Followers](https://highlevel.stoplight.io/docs/integrations/a4853ad9d0a48-add-followers) |
| `removeFollowers` | [Remove Followers](https://highlevel.stoplight.io/docs/integrations/0412c261ca64b-remove-followers) |

### PaymentsClient
| Client Method | API Documentation Reference |
|---------------|-----------------------------|
| `createWhiteLabelIntegrationProvider` | [Create White-label Integration Provider](https://highlevel.stoplight.io/docs/integrations/38fc7b49d107d-create-white-label-integration-provider) |
| `findWhiteLabelIntegrationProviders` | [List White-label Integration Providers](https://highlevel.stoplight.io/docs/integrations/cbdced5c59dfd-list-white-label-integration-providers) |
| `findOrders` | [List Orders](https://highlevel.stoplight.io/docs/integrations/378562f514a17-list-orders) |
| `findOrderById` | [Get Order by ID](https://highlevel.stoplight.io/docs/integrations/bcdf47fc22520-get-order-by-id) |
| `createOrderFullfillment` | [Create Order Fulfillment](https://highlevel.stoplight.io/docs/integrations/1e091099a92c6-create-order-fulfillment) |
| `findOrderFullfillments` | [List Fulfillment](https://highlevel.stoplight.io/docs/integrations/670fe5beec7de-list-fulfillment) |
| `findTransactions` | [List Transactions](https://highlevel.stoplight.io/docs/integrations/4d127e6508f0a-list-transactions) |
| `findTransactionById` | [Get Transaction by ID](https://highlevel.stoplight.io/docs/integrations/722e5769feada-get-transaction-by-id) |
| `findSubscriptions` | [List Subscriptions](https://highlevel.stoplight.io/docs/integrations/33c965c6cb9da-list-subscriptions) |
| `findSubscriptionById` | [Get Subscription by ID](https://highlevel.stoplight.io/docs/integrations/7be164894d54e-get-subscription-by-id) |
| `createCustomIntegrationProvider` | [Create New Integration](https://highlevel.stoplight.io/docs/integrations/d3e2affc0897a-create-new-integration) |
| `removeCustomIntegrationProvider` | [Deleting An Existing Integration](https://highlevel.stoplight.io/docs/integrations/97fffb0398f3c-deleting-an-existing-integration) |
| `findCustomIntegrationConnection` | [Fetch Given Provider Config](https://highlevel.stoplight.io/docs/integrations/dec209bac6191-fetch-given-provider-config) |
| `connectCustomIntegration` | [Create New Provider Config](https://highlevel.stoplight.io/docs/integrations/377c9e577827b-create-new-provider-config) |
| `disconnectCustomIntegration` | [Disconnect Existing Provider Config](https://highlevel.stoplight.io/docs/integrations/d9151fabd2d1a-disconnect-existing-provider-config) |

### ProductsClient
| Client Method | API Documentation Reference |
|---------------|-----------------------------|
| `findById` | [Get Product By ID](https://highlevel.stoplight.io/docs/integrations/272e8f008adb0-get-product-by-id) |
| `remove` | [Delete Product By ID](https://highlevel.stoplight.io/docs/integrations/285e8c049b2e1-delete-product-by-id) |
| `update` | [Update Product By ID](https://highlevel.stoplight.io/docs/integrations/469d7a90e0d15-update-product-by-id) |
| `create` | [Create Product](https://highlevel.stoplight.io/docs/integrations/9eda2dc176c9c-create-product) |
| `find` | [List Products](https://highlevel.stoplight.io/docs/integrations/7f6ce42d09400-list-products) |
| `createPrice` | [Create Price For A Product](https://highlevel.stoplight.io/docs/integrations/a47cd944aede9-create-price-for-a-product) |
| `findPrices` | [List Prices For A Product](https://highlevel.stoplight.io/docs/integrations/4f8b3c58c2e81-list-prices-for-a-product) |
| `findPriceById` | [Get Price By ID For A Product](https://highlevel.stoplight.io/docs/integrations/f902955da364a-get-price-by-id-for-a-product) |
| `updatePrice` | [Update Price By ID For A Product](https://highlevel.stoplight.io/docs/integrations/7ffcf47b1687a-update-price-by-id-for-a-product) |
| `removePrice` | [Delete Price By ID For A Product](https://highlevel.stoplight.io/docs/integrations/6025f28b731c1-delete-price-by-id-for-a-product) |

### SaasClient
| Client Method | API Documentation Reference |
|---------------|-----------------------------|
| `findLocations` | [Get Locations By StripeId With CompanyId](https://highlevel.stoplight.io/docs/integrations/17e63a64621dc-get-locations-by-stripe-id-with-company-id) |
| `update` | [Update SaaS Subscription](https://highlevel.stoplight.io/docs/integrations/3ed6984d6d3d3-update-saa-s-subscription) |
| `bulkDisable` | [Disable SaaS For Locations](https://highlevel.stoplight.io/docs/integrations/ae2bab1a54b4b-disable-saa-s-for-locations) |
| `enable` | [Enable SaaS For Location](https://highlevel.stoplight.io/docs/integrations/b7ee10fc892a5-enable-saa-s-for-location) |
| `pause` | [Pause Location](https://highlevel.stoplight.io/docs/integrations/7ad2b7afa2a8c-pause-location) |
| `updateRebilling` | [Update Rebilling](https://highlevel.stoplight.io/docs/integrations/cad43318bd5dc-update-rebilling) |

### SnapshotsClient
| Client Method | API Documentation Reference |
|---------------|-----------------------------|
| `find` | [Get Snapshots](https://highlevel.stoplight.io/docs/integrations/b7ac59fac1e81-get-snapshots) |
| `createShareLink` | [Create Snapshot Share Link](https://highlevel.stoplight.io/docs/integrations/7cfd7fa37e660-create-snapshot-share-link) |
| `findPushBetweenDates` | [Get Snapshot Push Between Dates](https://highlevel.stoplight.io/docs/integrations/3aafd3250cc4d-get-snapshot-push-between-dates) |
| `findLastPushByLocationId` | [Get Last Snapshot Push](https://highlevel.stoplight.io/docs/integrations/6c45f1aad5098-get-last-snapshot-push) |

### SurveysClient
| Client Method | API Documentation Reference |
|---------------|-----------------------------|
| `find` | [Get Surveys](https://highlevel.stoplight.io/docs/integrations/1e9fdbe3f2013-get-surveys) |
| `findSubmissions` | [Get Surveys Submissions](https://highlevel.stoplight.io/docs/integrations/288c25c7e319a-get-surveys-submissions) |

### UsersClient   
| Client Method | API Documentation Reference |
|---------------|-----------------------------|
| `findById` | [Get User](https://highlevel.stoplight.io/docs/integrations/a815845536249-get-user) |
| `update` | [Update User](https://highlevel.stoplight.io/docs/integrations/52e75431abf04-update-user) |
| `remove` | [Remove User](https://highlevel.stoplight.io/docs/integrations/c0ec81b013379-delete-user) |
| `findByLocation` | [Get User By Location](https://highlevel.stoplight.io/docs/integrations/2b1f72be935aa-get-user-by-location) |
| `create` | [Create User](https://highlevel.stoplight.io/docs/integrations/cf3f982337757-create-user) |
| `search` | [Search Users](https://highlevel.stoplight.io/docs/integrations/6fac93869cd3f-search-users) |

### WorkflowsClient
| Client Method | API Documentation Reference |
|---------------|-----------------------------|
| `findByLocationId` | [Get Workflow](https://highlevel.stoplight.io/docs/integrations/070d2f9be5549-get-workflow) |
