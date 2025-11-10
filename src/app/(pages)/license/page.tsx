export default function LicensePage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1>ARC-Reflective Use License v1.0</h1>
      <p className="text-lg font-medium text-foreground">
        <strong>© 2025 Albira Rahman ("Licensor")</strong>
      </p>

      <hr className="my-12" />

      <h2>TL;DR Summary</h2>
      <div className="bg-card/50 border border-border rounded-lg p-6 mb-8">
        <h3 className="text-accent mb-4">What you CAN do:</h3>
        <ul className="mb-6">
          <li>View, share, and discuss this content for personal, educational, or evaluative purposes</li>
          <li>Quote with proper attribution</li>
          <li>Reference in research or academic work</li>
        </ul>

        <h3 className="text-red-400 mb-4">What you CANNOT do:</h3>
        <ul className="mb-6">
          <li>Use commercially without permission</li>
          <li>Train AI models on this content</li>
          <li>Create derivative commercial products</li>
          <li>Claim as your own work</li>
        </ul>

        <p className="text-sm text-muted-foreground">
          <strong>Attribution required:</strong> "ARC — Two Minds. One Pulse. © 2025 Albira Rahman"
        </p>
      </div>

      <hr className="my-12" />

      <h2>Full License Terms</h2>

      <h3>1. Permission</h3>
      <p>
        You may view, share, and discuss this website, manifesto, concepts, and media ("Work") for personal, 
        educational, or evaluative purposes only.
      </p>

      <h3>2. Restrictions</h3>
      <p>
        No commercial use, derivative commercialization, resale, or integration into paid products without 
        written permission from the Licensor.
      </p>

      <h3>3. Attribution</h3>
      <p>
        If quoting or referencing the Work, you must include "ARC — Two Minds. One Pulse. © 2025 Albira Rahman" 
        with a link to the original source when possible.
      </p>

      <h3>4. No Data Extraction</h3>
      <p>
        You may not train machine learning models, create datasets, or extract data from the Work without 
        explicit written license from the Licensor.
      </p>

      <h3>5. No Misrepresentation</h3>
      <p>
        You may not imply endorsement by the Licensor or claim authorship of the Work or any portions thereof.
      </p>

      <h3>6. Termination</h3>
      <p>
        Any breach of these terms automatically terminates your permission to use the Work. Upon termination, 
        you must cease all use and distribution.
      </p>

      <h3>7. Reservation of Rights</h3>
      <p>
        All rights not expressly granted herein are reserved by the Licensor. This license does not grant any 
        patent rights, trademark rights, or other intellectual property rights beyond the specific permissions stated.
      </p>

      <h3>8. No Warranty</h3>
      <p>
        The Work is provided "as is" without warranty of any kind, express or implied, including but not limited 
        to warranties of merchantability, fitness for a particular purpose, or non-infringement.
      </p>

      <h3>9. Limitation of Liability</h3>
      <p>
        In no event shall the Licensor be liable for any direct, indirect, incidental, special, or consequential 
        damages arising out of or in connection with the use of the Work.
      </p>

      <h3>10. Governing Law</h3>
      <p>
        This license shall be governed by and construed in accordance with the laws of the jurisdiction where 
        the Licensor resides, without regard to its conflict of law provisions.
      </p>

      <hr className="my-12" />

      <h2>FAQ</h2>
      <div className="space-y-6">
        <div>
          <p className="font-medium text-foreground">Q: Can I use ARC concepts in my own project?</p>
          <p>A: For non-commercial purposes with proper attribution, yes. For commercial use, please contact us for permission.</p>
        </div>

        <div>
          <p className="font-medium text-foreground">Q: Can I quote the manifesto in my research paper?</p>
          <p>A: Yes, with proper academic citation including the required attribution.</p>
        </div>

        <div>
          <p className="font-medium text-foreground">Q: Can I translate this content?</p>
          <p>A: Yes for non-commercial purposes, with attribution. Please let us know about translations.</p>
        </div>

        <div>
          <p className="font-medium text-foreground">Q: What counts as "commercial use"?</p>
          <p>A: Any use that involves financial gain, including but not limited to: selling products or services based on the Work, incorporating into paid software, or using in marketing materials for commercial purposes.</p>
        </div>

        <div>
          <p className="font-medium text-foreground">Q: Can I create fan art or derivative creative works?</p>
          <p>A: Non-commercial creative responses are welcome with attribution. Please share them with us!</p>
        </div>
      </div>

      <hr className="my-12" />

      <h2>Contact for Permissions</h2>
      <p>For commercial licensing, partnership opportunities, or questions about this license:</p>
      <div className="my-6">
        <a 
          href="/reach-me" 
          className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-xl font-medium hover:bg-accent/90 transition-colors"
        >
          Contact via the Reach Me page
        </a>
      </div>
      <p className="text-sm text-muted-foreground">
        Response time: 3-5 business days for licensing inquiries
      </p>

      <hr className="my-12" />

      <h2>License History</h2>
      <ul>
        <li><strong>v1.0</strong> (January 2025): Initial release</li>
        <li>Future versions will be posted here with changelog</li>
      </ul>

      <hr className="my-12" />

      <div className="bg-card/30 border border-border rounded-lg p-6 text-center">
        <p className="text-muted-foreground mb-4">
          This license is designed to protect the contemplative and non-commercial nature of the ARC project 
          while allowing for educational and personal use. We believe in sharing ideas while maintaining 
          the integrity of the work.
        </p>
      </div>

      <hr className="my-12" />

      <p className="text-sm text-muted-foreground text-center">
        <strong>© 2025 Albira Rahman</strong> — ARC Project<br />
        Last updated: January 27, 2025
      </p>
    </div>
  )
}