import {LitElement, html, css} from 'lit-element';
import {i18n, Theme} from '@furo/framework/src/furo.js';
import {FBP} from '@furo/fbp';

import '@furo/layout/src/furo-vertical-flex.js';
import '@furo/form';
import '@furo/input';
import '@furo/app/src/furo-card.js';
import '@furo/form/src/furo-form.js';
import '@furo/input/src/furo-icon-button.js';
import '@furo/notification/src/furo-snackbar.js';
import '@ui5/webcomponents/dist/Timeline.js';
import '@ui5/webcomponents/dist/Button.js';
import '@ui5/webcomponents/dist/TimelineItem.js';
import '@ui5/webcomponents/dist/Card.js';
import '@ui5/webcomponents/dist/Panel.js';
import '@ui5/webcomponents/dist/Title.js';
import '@ui5/webcomponents/dist/Label.js';
import '@ui5/webcomponents/dist/List.js';
import '@ui5/webcomponents/dist/CustomListItem.js';
import '@ui5/webcomponents/dist/TabContainer.js';
import '@ui5/webcomponents/dist/Tab.js';
import '@ui5/webcomponents/dist/Popover.js';
import '@ui5/webcomponents-fiori/dist/ProductSwitch.js';
import '@ui5/webcomponents-fiori/dist/ProductSwitchItem.js';
import "@ui5/webcomponents-fiori/dist/ShellBar";
import "@ui5/webcomponents-icons/dist/icons/nav-back.js";
import "@ui5/webcomponents-icons/dist/icons/phone.js";
import "@ui5/webcomponents-icons/dist/icons/calendar.js";
import "@ui5/webcomponents-icons/dist/icons/add-document.js";
import "@ui5/webcomponents-icons/dist/icons/add-activity.js";
import "@ui5/webcomponents-icons/dist/icons/activities.js";


/**
 * `view-dashboard`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-view-dashboard
 * @appliesMixin FBP
 */
class ViewDashboard extends FBP(LitElement) {

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    this._FBPTraceWires()
    const SHELL_BAR = this.shadowRoot.querySelector('ui5-shellbar');
    SHELL_BAR.addEventListener("productSwitchClick", (event) => {
      this._FBPTriggerWire('--prodSwitch', event.detail.targetRef);
    });
    SHELL_BAR.addEventListener("notificationsClick", (event) => {
      this._FBPTriggerWire('--notificationClicked', event.detail.targetRef);
    });
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent(this.name) ||
      css`
        :host {
          display: block;
          height: 100%;
          overflow: hidden;
        }

        :host([hidden]) {
          display: none;
        }

        .grid {
          display: grid;
          grid-gap: 10px;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          grid-auto-rows: 320px;
        }

        .content {
          padding: var(--spacing-s);
          color: var(--on-surface);
        }

        .double-width {
          grid-column-end: span 2;
        }

        .double-height {
          grid-row-end: span 2;
        }

        furo-card, ui5-card {
          margin: 0 var(--spacing) var(--spacing) 0;
          width: 100%;

        }


        .item {
          display: flex;
          width: 100%;
          justify-content: space-between;
        }

        .item-content-begin {
          display: flex;
          flex-direction: column;
        }

        .item-content-begin-title {
          padding-bottom: 0.25rem;
        }

        .status-error {
          color: #b00;
        }

        .status-warning {
          color: #e9730c;
        }

        .status-success {
          color: #107e3e;
        }
      `
    );
  }

  /**
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <furo-vertical-flex>
        <ui5-shellbar
          primary-title="Launchpad"
          secondary-title="SAP Fiori Design Language"
          show-product-switch
          show-notifications
          notification-count="22"
          logo="../../../assets/images/sap.png">
          <ui5-button icon="nav-back" slot="startButton"></ui5-button>
        </ui5-shellbar>
        <ui5-popover id="productswitch-popover" placement-type="Bottom" ƒ-open-by="--prodSwitch">
          <ui5-product-switch>
            <ui5-product-switch-item heading="Activities" subtitle="WorkItems"
                                     icon="add-activity"></ui5-product-switch-item>
            <ui5-product-switch-item heading="Document Cloud" subtitle="Manange"
                                     icon="add-document"></ui5-product-switch-item>
          </ui5-product-switch>
        </ui5-popover>
        <ui5-popover id="notification-popover" placement-type="Bottom" ƒ-open-by="--notificationClicked">
          <ui5-tabcontainer class="full-width" collapsed fixed show-overflow>
            <ui5-tab text="By date" selected></ui5-tab>
            <ui5-tab text="By type"></ui5-tab>
            <ui5-tab text="By priority"></ui5-tab>
          </ui5-tabcontainer>
        </ui5-popover>
        <!-- Tab Container-->
        <ui5-tabcontainer class="full-width" collapsed fixed show-overflow @-tabselect="--tabSelect">
          <ui5-tab text="Home" selected></ui5-tab>
          <ui5-tab text="What's new"></ui5-tab>
          <ui5-tab text="History"></ui5-tab>
          <ui5-tab text="My Work Items" disabled></ui5-tab>
        </ui5-tabcontainer>
        <!-- Dashboard Grid-->
        <div flex scroll class="content grid">
          <ui5-card heading="Project Cloud Transformation" subheading="Revenue per Product | EUR" status="2 of 2"
                    class="small double">
            <div class="content ">
              <ui5-list separators="None">
                <ui5-li-custom>
                  <div class="item">
                    <div class="item-content-begin">
                      <ui5-title level="H5" class="item-content-begin-title">Avantel</ui5-title>
                      <ui5-label>ID234522566-D44</ui5-label>
                    </div>
                    <div class="item-content-end">
                      <span class="status-success">27.25K EUR</span>
                    </div>
                  </div>
                </ui5-li-custom>
                <ui5-li-custom>
                  <div class="item">
                    <div class="item-content-begin">
                      <ui5-title level="H5" class="item-content-begin-title">Avantel</ui5-title>
                      <ui5-label>ID234522566-D44</ui5-label>
                    </div>
                    <div class="item-content-end">
                      <span class="status-success">27.25K EUR</span>
                    </div>
                  </div>
                </ui5-li-custom>
              </ui5-list>
            </div>
          </ui5-card>
          <ui5-card heading="My Tasks" subheading="All items" status="all open">
            <div class="content ">
              <ui5-title level="H2">13</ui5-title>
            </div>
          </ui5-card>
          <ui5-card heading="Activities" subheading="For today" class="double-height">
            <div class="content ">
              <ui5-timeline>
                <ui5-timeline-item id="test-item" icon="phone" title-text="called" subtitle-text="20.02.2017 11:30"
                                   icon="" item-name="John Smith" item-name-clickable></ui5-timeline-item>
                <ui5-timeline-item title-text="Weekly Sync - CP Design" subtitle-text="27.07.2017 (11:00 - 12:30)"
                                   icon="calendar">
                  <div>MR SOF02 2.43</div>
                </ui5-timeline-item>
                <ui5-timeline-item title-text="Video Converence Call - UI5" subtitle-text="31.01.2018 (12:00 - 13:00)"
                                   icon="calendar">
                  <div>Online meeting</div>
                </ui5-timeline-item>
              </ui5-timeline>
            </div>
          </ui5-card>
          <ui5-card disabled heading="App Flow" subheading="Routing example">
            <img src="../../assets/images/hamburg.jpg" slot="avatar" alt=""/>
            <furo-app-flow event="form-requested" ƒ-trigger="--form"></furo-app-flow>
            <div class="content ">
              <furo-horizontal-flex>
                <ui5-button design="Positive" ƒ-focus="--pageActivated" @-click="--form">register</ui5-button>
              </furo-horizontal-flex>
            </div>
          </ui5-card>
          <ui5-card heading="Dona Maria Moore" subheading="Senior Sales Executive" class="small">
            <img src="../../assets/images/hamburg.jpg" slot="avatar"/>

            <div class="content ">
              <ui5-title level="H5" style="padding-bottom: 1rem;">Contact details</ui5-title>

              <div class="content-group">
                <ui5-label>Company Name</ui5-label>
                <ui5-title level="H6">Company A</ui5-title>
              </div>
              <div class="content-group">
                <ui5-label>Address</ui5-label>
                <ui5-title level="H6">481 West Street, Anytown 45066, USA</ui5-title>
              </div>
              <div class="content-group">
                <ui5-label>Website</ui5-label>
                <ui5-link target="_blank">www.company_a.example.com</ui5-link>
              </div>
            </div>
          </ui5-card>
          <ui5-card heading="Simulate unauthorized">
            <div class="content ">
              <ui5-label>Click on the button to emmit a unauthorized event.</ui5-label>
              <ui5-label>
                The unathorized event is catched in the app-shell and triggers an app-flow event which
                causses the router to navigate to the <strong>/auth</strong> page..
              </ui5-label>
              <ui5-button design="Negative" @-click="^^unauthorized">Unauth</ui5-button>

            </div>
          </ui5-card>
          <ui5-card heading="Both expandable and expanded">
            <div class="content ">
              <ui5-panel width="100%" collapsed="false" accessible-role="Complementary"
                         header-text="Content" class="full-width">
                <ui5-title>I am a heading!</ui5-title>
                <ui5-label wrap>Short text.</ui5-label>
                <br>
                <ui5-label wrap>Another text.</ui5-label>
                <ui5-label class="content-color">
                  Aute ullamco officia fugiat culpa do tempor tempor aute excepteur magna. Quis velit adipisicing
                  excepteur do eu duis elit. Sunt ea pariatur nulla est laborum proident sunt labore commodo Lorem
                  laboris
                  nisi Lorem.
                </ui5-label>
              </ui5-panel>
            </div>
          </ui5-card>
        </div>
        </div>
    `;
  }
}

window.customElements.define('view-dashboard', ViewDashboard);
