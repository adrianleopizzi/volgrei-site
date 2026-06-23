export default function DataProcessingAgreement() {
  return (
    <main style={{ maxWidth: "720px", margin: "0 auto", padding: "clamp(32px, 4vw, 64px)", paddingTop: "120px", paddingBottom: "120px" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "400", color: "var(--text-primary)", marginBottom: "8px" }}>Data Processing Agreement</h1>
      <p style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "48px" }}>Last updated: June 2025</p>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "16px", fontWeight: "500", color: "var(--text-primary)", marginBottom: "12px" }}>1. Purpose and Scope</h2>
        <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.7" }}>
          This Data Processing Agreement ("DPA") forms part of the agreement between Volgrei ("Data Processor") and the user or entity ("Data Controller") using the Volgrei Service. This DPA governs the processing of personal data by Volgrei on behalf of the Data Controller in connection with the provision of the Service, in accordance with Article 28 of Regulation (EU) 2016/679 (GDPR).
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "16px", fontWeight: "500", color: "var(--text-primary)", marginBottom: "12px" }}>2. Definitions</h2>
        <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "12px" }}>
          For the purposes of this DPA:
        </p>
        <ul style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.7", paddingLeft: "20px" }}>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>"Personal Data"</strong> means any information relating to an identified or identifiable natural person as defined in Article 4(1) GDPR.</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>"Processing"</strong> means any operation performed on personal data as defined in Article 4(2) GDPR.</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>"Data Subject"</strong> means the natural person to whom the personal data relates.</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>"Sub-processor"</strong> means any third party engaged by Volgrei to process personal data in connection with the Service.</li>
        </ul>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "16px", fontWeight: "500", color: "var(--text-primary)", marginBottom: "12px" }}>3. Nature and Purpose of Processing</h2>
        <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.7" }}>
          Volgrei processes personal data solely for the purpose of providing the Service as described in the Terms of Service and Privacy Policy. Processing activities include storage of user-generated content, authentication, subscription management, and AI-assisted features. Volgrei shall not process personal data for any purpose other than those documented herein or as instructed in writing by the Data Controller.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "16px", fontWeight: "500", color: "var(--text-primary)", marginBottom: "12px" }}>4. Obligations of Volgrei as Data Processor</h2>
        <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "12px" }}>
          Volgrei agrees to:
        </p>
        <ul style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.7", paddingLeft: "20px" }}>
          <li style={{ marginBottom: "8px" }}>Process personal data only on documented instructions from the Data Controller, including with regard to transfers outside the EEA;</li>
          <li style={{ marginBottom: "8px" }}>Ensure that personnel authorized to process personal data are bound by appropriate confidentiality obligations;</li>
          <li style={{ marginBottom: "8px" }}>Implement appropriate technical and organizational security measures pursuant to Article 32 GDPR;</li>
          <li style={{ marginBottom: "8px" }}>Assist the Data Controller in responding to requests from data subjects exercising their rights under Chapter III GDPR;</li>
          <li style={{ marginBottom: "8px" }}>Notify the Data Controller without undue delay, and no later than 72 hours, upon becoming aware of a personal data breach;</li>
          <li style={{ marginBottom: "8px" }}>Delete or return all personal data to the Data Controller upon termination of the Service, and delete existing copies unless retention is required by applicable law;</li>
          <li style={{ marginBottom: "8px" }}>Make available all information necessary to demonstrate compliance with Article 28 GDPR obligations.</li>
        </ul>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "16px", fontWeight: "500", color: "var(--text-primary)", marginBottom: "12px" }}>5. Sub-processors</h2>
        <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "12px" }}>
          The Data Controller grants Volgrei general authorization to engage sub-processors. Volgrei currently engages the following sub-processors:
        </p>
        <ul style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.7", paddingLeft: "20px" }}>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Supabase Inc.</strong> — database and authentication (United States)</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Anthropic PBC</strong> — AI inference processing (United States)</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>RevenueCat Inc.</strong> — subscription management (United States)</li>
          <li style={{ marginBottom: "8px" }}><strong style={{ color: "var(--text-primary)" }}>Cloudflare Inc.</strong> — network and delivery infrastructure (United States)</li>
        </ul>
        <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.7", marginTop: "12px" }}>
          Volgrei shall impose data protection obligations on each sub-processor equivalent to those set out in this DPA. Volgrei will notify the Data Controller of any intended changes to sub-processors, giving the Data Controller the opportunity to object. Transfers to sub-processors outside the EEA are conducted under Standard Contractual Clauses or equivalent safeguards.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "16px", fontWeight: "500", color: "var(--text-primary)", marginBottom: "12px" }}>6. Security Measures</h2>
        <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.7" }}>
          Volgrei implements and maintains appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including: encryption of personal data in transit using TLS 1.2 or higher; encryption of personal data at rest; access controls and authentication mechanisms; regular review of security measures; and procedures for testing and evaluating the effectiveness of security measures.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "16px", fontWeight: "500", color: "var(--text-primary)", marginBottom: "12px" }}>7. Data Subject Rights Assistance</h2>
        <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.7" }}>
          Taking into account the nature of the processing, Volgrei shall assist the Data Controller by appropriate technical and organizational measures, insofar as possible, in fulfilling the Data Controller's obligations to respond to requests for the exercise of data subjects' rights under Chapter III of the GDPR, including rights of access, rectification, erasure, restriction, portability, and objection.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "16px", fontWeight: "500", color: "var(--text-primary)", marginBottom: "12px" }}>8. Data Breach Notification</h2>
        <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.7" }}>
          In the event of a personal data breach, Volgrei will notify the Data Controller without undue delay and within 72 hours of becoming aware of the breach. Such notification shall include, to the extent available: a description of the nature of the breach; the categories and approximate number of data subjects concerned; the likely consequences of the breach; and the measures taken or proposed to address the breach.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "16px", fontWeight: "500", color: "var(--text-primary)", marginBottom: "12px" }}>9. Term and Termination</h2>
        <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.7" }}>
          This DPA remains in effect for the duration of the Service agreement. Upon termination of the Service, Volgrei shall, at the choice of the Data Controller, delete or return all personal data processed under this DPA, and certify such deletion in writing, unless applicable law requires continued storage.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: "16px", fontWeight: "500", color: "var(--text-primary)", marginBottom: "12px" }}>10. Contact</h2>
        <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.7" }}>
          For questions regarding this DPA or to exercise your rights, please contact us at <a href="mailto:legal@volgrei.com" style={{ color: "var(--accent)" }}>legal@volgrei.com</a>.
        </p>
      </section>
    </main>
  );
}