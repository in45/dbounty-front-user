export const vuln_Category = [
    {
        id: 1,
        title: 'Blockchain',
        has_child: true,
        childrens: [
            {
                id: 1,
                title: 'DoS with (Unexpected) revert',
                has_child: false
            },
            {
                id: 2,
                title: 'Transaction-Ordering Dependence (TOD) / Front Running',
                has_child: false
            },
            {
                id: 3,
                title: 'Timestamp Dependence',
                has_child: false
            },
            {
                id: 4,
                title: 'Integer Overflow',
                has_child: false
            },
            {
                id: 5,
                title: 'Integer Underflow',
                has_child: false
            },
            {
                id: 6,
                title: 'Forcibly Sending Ether to a Contract',
                has_child: false
            },
            {
                id: 7,
                title: 'DoS with Block Gas Limit',
                has_child: false
            },
            {
                id: 8,
                title: 'Race Conditions',
                has_child: true,
                childrens: [
                    {
                        id: 1,
                        title: 'Reentrancy',
                        has_child: false
                    },
                    {
                        id: 2,
                        title: 'Cross-function Race Conditions',
                        has_child: false
                    },
                    {
                        id: 3,
                        title: 'Pitfalls in Race Condition Solutions',
                        has_child: false
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        title: 'Mobile Security Misconfiguration',
        has_child: true,
        childrens: [
            {
                id: 1,
                title: 'SSL Certificate Pinning Absent',
                has_child: false,
            },
            {
                id: 2,
                title: 'SSL Certificate Pinning Defeatable',
                has_child: false,
            },
            {
                id: 3,
                title: 'Tapjacking',
                has_child: false,
            },
            {
                id: 4,
                title: 'Improper Platform Usage',
                has_child: false,
            },
            {
                id: 5,
                title: 'Insecure Data Storage',
                has_child: false,
            },
            {
                id: 6,
                title: 'Client Code Quality',
                has_child: false,
            },
            {
                id: 7,
                title: 'Code Tampering',
                has_child: false,
            },
            {
                id: 8,
                title: 'Reverse Engineering',
                has_child: false,
            },
            {
                id: 9,
                title: 'Insecure Authorization',
                has_child: false,
            },
            {
                id: 10,
                title: 'Insufficient Cryptography(without SSL and TLS)',
                has_child: false,
            },
            {
                id: 11,
                title: 'Insecure Authentication',
                has_child: false,
            },
            {
                id: 12,
                title: 'Exposed Sensitive Android Intent',
                has_child: false,
            },
            {
                id: 13,
                title: 'Exposed Sensitive iOS URL Scheme',
                has_child: false,
            }
        ]

    },
    {
        id: 3,
        title: 'Insecure Data Transport',
        has_child: true,
        childrens: [
            {
                id: 1,
                title: 'Cleartext Transmission of Sensitive Data',
                has_child: false,
            },
            {
                id: 2,
                title: 'Executable Download',
                has_child: false,
            },
            {
                id: 3,
                title: 'No Secure Integrity Check',
                has_child: false,
            },
            {
                id: 4,
                title: 'Best Practices Not Enforced',
                has_child: false,
            },
            {
                id: 5,
                title: 'Lack of SSL',
                has_child: false,
            },
            {
                id: 6,
                title: 'Secure Integrity Check',
                has_child: false,
            }
        ]
    },
    {
        id: 4,
        title: 'Lack of Binary Hardening',
        has_child: true,
        childrens: [
            {
                id: 1,
                title: 'Lack of Exploit Mitigations',
                has_child: false,
            },
            {
                id: 2,
                title: 'Lack of Jailbreak Detection',
                has_child: false,
            },
            {
                id: 3,
                title: 'Lack of Obfuscation',
                has_child: false,
            },
            {
                id: 4,
                title: 'Runtime Instrumentation-Based',
                has_child: false,
            }
        ]
    },
    {
        id: 5,
        title: 'Insecure Data Storage',
        has_child: true,
        childrens: [
            {
                id: 1,
                title: 'Sensitive Application Data Stored Unencrypted',
                has_child: false,
            },
            {
                id: 2,
                title: 'Server-Side Credentials Storage',
                has_child: false,
            },
            {
                id: 3,
                title: 'Non-Sensitive Application Data Stored Unencrypted',
                has_child: false,
            },
            {
                id: 4,
                title: 'Screen Caching Enabled',
                has_child: false,
            }
        ]
    },
    {
        id: 6,
        title: 'Using Components with Known Vulnerabilities',
        has_child: true,
        childrens: [
            {
                id: 1,
                title: 'Rosetta Flash',
                has_child: false,
            },
            {
                id: 2,
                title: 'Outdated Software Version',
                has_child: false,
            },
            {
                id: 3,
                title: 'OCR (Optical Character Recognition)',
                has_child: false,
            },
        ]
    },
    {
        id: 7,
        title: 'External Behaviors',
        has_child: true,
        childrens: [
            {
                id: 1,
                title: 'Plaintext Password Field',
                has_child: false,
            },
            {
                id: 2,
                title: 'Save Password',
                has_child: false,
            },
            {
                id: 3,
                title: 'Autocomplete Enabled',
                has_child: false,
            },
            {
                id: 4,
                title: 'Autocorrect Enabled',
                has_child: false,
            },
            {
                id: 5,
                title: 'Aggressive Offline Caching',
                has_child: false,
            },
            {
                id: 6,
                title: 'CSV Injection',
                has_child: false,
            },
            {
                id: 7,
                title: 'Captcha Bypass',
                has_child: false,
            },
            {
                id: 8,
                title: 'Crowdsourcing',
                has_child: false,
            },
            {
                id: 9,
                title: 'System Clipboard Leak',
                has_child: false,
            },
            {
                id: 10,
                title: 'Shared Links',
                has_child: false,
            },
            {
                id: 11,
                title: 'Remote execution',
                has_child: true,
                childrens: [
                    {
                        id: 1,
                        title: 'Application Layer Entry',
                        has_child: false,
                    },
                    {
                        id: 2,
                        title: 'Server Service Entry',
                        has_child: false,
                    },
                    {
                        id: 3,
                        title: 'Server-Side Template Injection',
                        has_child: false,
                    },
                    {
                        id: 4,
                        title: 'XPath/XQuery Injection',
                        has_child: false,
                    }
                ]
            },
            {
                id: 12,
                title: 'User Password Persisted in Memory',
                has_child: false,
            }
        ]
    },
    {
        id: 8,
        title: 'Unvalidated Redirects and Forwards',
        has_child: true,
        childrens: [
            {
                id: 1,
                title: 'Open Redirect',
                has_child: false,
            },
            {
                id: 2,
                title: 'Tabnabbing',
                has_child: false,
            },
            {
                id: 3,
                title: 'Lack of Security Speed Bump Page',
                has_child: false,
            }
        ]
    },
    {
        id: 9,
        title: 'DOS',
        has_child: true,
        childrens: [
            {
                id: 1,
                title: 'Application-Level Denial-of-Service (DoS)',
                has_child: false,
            },
            {
                id: 2,
                title: 'Session Table Flood DoS',
                has_child: false,
            },
            {
                id: 3,
                title: 'XML DoS (Billion laughs)',
                has_child: false,
            },
            {
                id: 4,
                title: 'XML DoS (signature)',
                has_child: false,
            },
            {
                id: 5,
                title: 'DoS against a specific server service',
                has_child: false,
            },
            {
                id: 6,
                title: 'DoS against a specific user',
                has_child: false,
            },
            {
                id: 7,
                title: 'Slow HTTP',
                has_child: false,
            }
        ]
    },
    {
        id: 10,
        title: 'Cross-Site Request Forgery (CSRF)',
        has_child: true,
        childrens: [
            {
                id: 1,
                title: 'Application-Wide',
                has_child: false,
            },
            {
                id: 2,
                title: 'Action-Specific',
                has_child: false,
            },
            {
                id: 3,
                title: 'Authenticated Action',
                has_child: false,
            },
            {
                id: 4,
                title: 'Unauthenticated Action',
                has_child: false,
            },
            {
                id: 5,
                title: 'Token Prediction',
                has_child: false,
            },
            {
                id: 6,
                title: 'Protection Not Enforced',
                has_child: false,
            },
            {
                id: 7,
                title: 'Protection Missing',
                has_child: false,
            },
            {
                id: 8,
                title: 'Logout',
                has_child: false,
            }
        ]
    },
    {
        id: 11,
        title: 'Sensitive Data Exposure',
        has_child: true,
        childrens: [
            {
                id: 1,
                title: 'Information Exposure',
                has_child: true,
                childrens: [
                    {
                        id: 1,
                        title: 'Information Exposure Through Debug Informatione',
                        has_child: true,
                    },
                    {
                        id: 2,
                        title: 'Information Exposure Through Directory Listing',
                        has_child: true,
                    },
                    {
                        id: 3,
                        title: 'Information Exposure Through an Error Message',
                        has_child: true,
                    }
                ]
            },
            {
                id: 2,
                title: 'Critically Sensitive Data',
                has_child: false,
            },
            {
                id: 3,
                title: 'Password Disclosure',
                has_child: false,
            },
            {
                id: 4,
                title: 'Private API Keys',
                has_child: false,
            },
            {
                id: 5,
                title: 'EXIF Geolocation Data Not Stripped From Uploaded Images',
                has_child: false,
            },
            {
                id: 6,
                title: 'Automatic User Enumeration',
                has_child: false,
            },
            {
                id: 7,
                title: 'Manual User Enumeration',
                has_child: false,
            },
            {
                id: 8,
                title: 'Visible Detailed Error/Debug Page',
                has_child: false,
            },
            {
                id: 9,
                title: 'Detailed Server Configuration',
                has_child: false,
            },
            {
                id: 10,
                title: 'Full Path Disclosure',
                has_child: false,
            },
            {
                id: 11,
                title: 'Descriptive Stack Trace',
                has_child: false,
            },
            {
                id: 12,
                title: 'Disclosure of Known Public Information',
                has_child: false,
            },
            {
                id: 13,
                title: 'Token Leakage via Refere',
                has_child: false,
            },
            {
                id: 14,
                title: 'Sensitive Token in URL',
                has_child: false,
            },
            {
                id: 15,
                title: 'Non-Sensitive Token in URL',
                has_child: false,
            },
            {
                id: 16,
                title: 'Weak Password Reset Implementation',
                has_child: false,
            },
            {
                id: 17,
                title: 'Mixed Content (HTTPS Sourcing HTTP)',
                has_child: false,
            },
            {
                id: 18,
                title: 'Sensitive Data Hardcoded',
                has_child: false,
            },
            {
                id: 19,
                title: 'Internal IP Disclosure',
                has_child: false,
            },
            {
                id: 20,
                title: 'Cross Site Script Inclusion (XSSI)',
                has_child: false,
            },
            {
                id: 21,
                title: 'Account Enumeration',
                has_child: false,
            },
            {
                id: 22,
                title: 'Directory Structure Enumeration',
                has_child: false,
            },
            {
                id: 23,
                title: 'Improper Error Message Text',
                has_child: false,
            },
            {
                id: 24,
                title: 'Identity of Software Architecture',
                has_child: false,
            },
            {
                id: 25,
                title: 'Software Version Disclosed',
                has_child: false,
            },
            {
                id: 26,
                title: 'Sensitive Source Code Comments',
                has_child: false,
            },
            {
                id: 27,
                title: 'Sensitive Information Leak to third-parties',
                has_child: false,
            },
            {
                id: 28,
                title: 'Sensitive Client Information Disclosed',
                has_child: false,
            },
            {
                id: 29,
                title: 'Sensitive Directory/File Contents Disclosed',
                has_child: false,
            },
            {
                id: 30,
                title: 'JSON Hijacking',
                has_child: false,
            }
        ]
    },
    {
        id: 12,
        title: 'Broken Authentication and Session Management',
        has_child: true,
        childrens: [
            {
                id: 1,
                title: 'Weak Login Function',
                has_child: false,
            },
            {
                id: 2,
                title: 'Session Expiration Too Long',
                has_child: false,
            },
            {
                id: 3,
                title: 'Session Fixation',
                has_child: false,
            },
            {
                id: 4,
                title: 'Credential/Session Prediction',
                has_child: false,
            },
            {
                id: 5,
                title: 'Concurrent Sessions Permitted',
                has_child: false,
            },
            {
                id: 6,
                title: 'Failure to Invalidate Session',
                has_child: false,
            },
            {
                id: 7,
                title: 'Access/Privacy Control Violation',
                has_child: false,
            },
            {
                id: 8,
                title: 'SSO Authentication Bypass',
                has_child: false,
            },
            {
                id: 9,
                title: 'Authentication Bypass',
                has_child: false,
            },
            {
                id: 10,
                title: 'Privilege Escalation',
                has_child: false,
            },
            {
                id: 11,
                title: 'Weak Registration Implementation',
                has_child: false,
            }
        ]
    },
    {
        id: 13,
        title: 'Server Security Misconfiguration',
        has_child: true,
        childrens: [
            {
                id: 1,
                title: 'Homograph/IDN-Based',
                has_child: false,
            },
            {
                id: 2,
                title: 'Mail Server Misconfiguration',
                has_child: false,
            },
            {
                id: 3,
                title: 'Subdomain Takeover',
                has_child: false,
            },
            {
                id: 4,
                title: 'Zone Transfer',
                has_child: false,
            },
            {
                id: 5,
                title: 'Missing Certification Authority Authorization (CAA) Record',
                has_child: false,
            },
            {
                id: 6,
                title: 'Lack of Password Confirmation',
                has_child: false,
            },
            {
                id: 7,
                title: 'Missing SPF on Email Domain',
                has_child: false,
            },
            {
                id: 8,
                title: 'Email Spoofable Via Third-Party API Misconfiguration',
                has_child: false,
            },
            {
                id: 9,
                title: 'Missing SPF on Non-Email Domain',
                has_child: false,
            },
            {
                id: 10,
                title: 'Missing DKIM/DMARC',
                has_child: false,
            },
            {
                id: 11,
                title: 'SPF Uses a Soft Fail',
                has_child: false,
            },
            {
                id: 12,
                title: 'SPF Includes More Than 10 Lookups',
                has_child: false,
            },
            {
                id: 13,
                title: 'UI Redressing (Clickjacking)',
                has_child: false,
            },
            {
                id: 14,
                title: 'No Rate Limiting on Form',
                has_child: false,
            },
            {
                id: 15,
                title: 'Unsafe File Upload',
                has_child: false,
            },
            {
                id: 16,
                title: 'Cookie Scoped to Parent Domain',
                has_child: false,
            },
            {
                id: 17,
                title: 'Missing Secure or HTTPOnly Cookie Flag',
                has_child: false,
            },
            {
                id: 18,
                title: 'OAuth Misconfiguration',
                has_child: false,
            },
            {
                id: 19,
                title: 'Unsafe Cross-Origin Resource Sharing',
                has_child: false,
            },
            {
                id: 20,
                title: 'Captcha Bypass',
                has_child: false,
            },
            {
                id: 21,
                title: 'Cache Directives',
                has_child: false,
            },
            {
                id: 22,
                title: 'Cache poisoning',
                has_child: false,
            },
            {
                id: 23,
                title: 'Exposed Admin Portal',
                has_child: false,
            },
            {
                id: 24,
                title: 'Missing DNSSEC',
                has_child: false,
            },
            {
                id: 25,
                title: 'Fingerprinting/Banner Disclosureion',
                has_child: false,
            },
            {
                id: 26,
                title: 'Username Enumeration',
                has_child: false,
            },
            {
                id: 27,
                title: 'Potentially Unsafe HTTP Method Enabled',
                has_child: false,
            },
            {
                id: 28,
                title: 'Insecure SSL',
                has_child: false,
            },
            {
                id: 29,
                title: 'Reflected File Download (RFD)',
                has_child: false,
            },
            {
                id: 30,
                title: 'Lack of Security Headers',
                has_child: false,
            },
            {
                id: 31,
                title: 'Bitsquatting',
                has_child: false,
            },
            {
                id: 32,
                title: 'Directory Listing Enabled',
                has_child: false,
            },
            {
                id: 33,
                title: 'Using Default Credentials',
                has_child: false,
            },
            {
                id: 34,
                title: 'Path Traversal',
                has_child: false,
            },
            {
                id: 35,
                title: 'Same-Site Scripting',
                has_child: false,
            },
            {
                id: 36,
                title: 'SSL Attack (BREACH, POODLE etc.)',
                has_child: false,
            },
            {
                id: 37,
                title: 'Misconfigured DNS',
                has_child: false,
            }
        ]
    },
    {
        id: 14,
        title: 'Unsecure Design',
        has_child: true,
        childrens: [
            {
                id: 1,
                title: 'Weak Password Recovery Mechanism for Forgotten Password',
                has_child: false,
            },
            {
                id: 2,
                title: 'Use of Hard-coded Password',
                has_child: false,
            },
            {
                id: 3,
                title: 'Violation of Secure Design Principles',
                has_child: false,
            },
            {
                id: 4,
                title: 'Weak Cryptography for Passwords',
                has_child: false,
            },
            {
                id: 5,
                title: 'XML Entity Expansion',
                has_child: false,
            },
            {
                id: 6,
                title: 'Use of Hard-coded Credentials',
                has_child: false,
            },
            {
                id: 7,
                title: 'Weak Password Policy',
                has_child: false,
            },
            {
                id: 8,
                title: 'Token is Not Invalidated After Use',
                has_child: false,
            },
            {
                id: 9,
                title: 'Token Has Long Timed Expiry',
                has_child: false,
            },
            {
                id: 10,
                title: 'Token is Not Invalidated After Email Change',
                has_child: false,
            },
            {
                id: 11,
                title: 'Token is Not Invalidated After Password Change',
                has_child: false,
            },
            {
                id: 12,
                title: 'Token is Not Invalidated After New Token is Requesteds',
                has_child: false,
            },
            {
                id: 13,
                title: 'Lack of Verification Email',
                has_child: false,
            },
            {
                id: 14,
                title: 'Lack of Notification Email',
                has_child: false,
            },
            {
                id: 15,
                title: 'Weak 2FA Implementation (Missing Failsafe)',
                has_child: false,
            },
            {
                id: 16,
                title: 'Weak Registration Implementation',
                has_child: false,
            },
            {
                id: 17,
                title: 'Allows Disposable Email Addresses',
                has_child: false,
            },
            {
                id: 18,
                title: 'Cookie-related Flaws',
                has_child: false,
            },
            {
                id: 19,
                title: 'Email/Password Recovery Flaw',
                has_child: false,
            },
            {
                id: 20,
                title: 'Business Logic Errors',
                has_child: false,
            },
            {
                id: 21,
                title: 'Cleartext Storage of Sensitive Information',
                has_child: false,
            },
            {
                id: 22,
                title: 'Cleartext Transmission of Sensitive Information',
                has_child: false,
            },
            {
                id: 23,
                title: 'Deserialization of Untrusted Data',
                has_child: false,
            },
            {
                id: 24,
                title: 'Insecure Storage of Sensitive Information',
                has_child: false,
            },
            {
                id: 25,
                title: 'Insufficient Session Expiration',
                has_child: false,
            },
            {
                id: 26,
                title: 'Insufficiently Protected Credentials',
                has_child: false,
            },
            {
                id: 27,
                title: 'Man-in-the-Middle',
                has_child: false,
            },
            {
                id: 28,
                title: 'Missing Encryption of Sensitive Data',
                has_child: false,
            },
            {
                id: 29,
                title: 'Open Redirect',
                has_child: false,
            },
            {
                id: 30,
                title: 'Password in Configuration File',
                has_child: false,
            },
            {
                id: 31,
                title: 'Privacy Violation',
                has_child: false,
            },
            {
                id: 32,
                title: 'Reliance on Cookies without Validation and Integrity Checking',
                has_child: false,
            },
            {
                id: 33,
                title: 'Storing Passwords in a Recoverable Format',
                has_child: false,
            },
            {
                id: 34,
                title: 'UI Redressing (Clickjacking)',
                has_child: false,
            },
            {
                id: 35,
                title: 'Unprotected Transport of Credentials',
                has_child: false,
            },
            {
                id: 36,
                title: 'Unverified Password Change',
                has_child: false,
            }
        ]
    },
    {
        id: 15,
        title: 'Memory Corruption',
        has_child: true,
        childrens: [
            {
                id: 1,
                title: 'Array Index Underflow',
                has_child: false,
            },
            {
                id: 2,
                title: 'Buffer Over-read',
                has_child: false,
            },
            {
                id: 3,
                title: 'Buffer Under-read',
                has_child: false,
            },
            {
                id: 4,
                title: 'Buffer Underflow',
                has_child: false,
            },
            {
                id: 5,
                title: 'Classic Buffer Overflow',
                has_child: false,
            },
            {
                id: 6,
                title: 'Double Free',
                has_child: false,
            },
            {
                id: 7,
                title: 'Heap Overflow',
                has_child: false,
            },
            {
                id: 8,
                title: 'Improper Null Termination',
                has_child: false,
            },
            {
                id: 9,
                title: 'Incorrect Calculation of Buffer Size',
                has_child: false,
            },
            {
                id: 10,
                title: 'Integer Overflow',
                has_child: false,
            },
            {
                id: 11,
                title: 'Integer Underflow',
                has_child: false,
            },
            {
                id: 12,
                title: 'Memory Corruption - Generic',
                has_child: false,
            },
            {
                id: 13,
                title: 'NULL Pointer Dereference',
                has_child: false,
            },
            {
                id: 14,
                title: 'Off-by-one Error',
                has_child: false,
            },
            {
                id: 15,
                title: 'Out-of-bounds Read',
                has_child: false,
            },
            {
                id: 16,
                title: 'Stack Overflow',
                has_child: false,
            },
            {
                id: 17,
                title: 'Type Confusion',
                has_child: false,
            },
            {
                id: 18,
                title: 'Use After Free',
                has_child: false,
            },
            {
                id: 19,
                title: 'Use of Externally-Controlled Format String',
                has_child: false,
            },
            {
                id: 20,
                title: 'Wrap-around Error',
                has_child: false,
            },
            {
                id: 21,
                title: 'Write-what-where Condition',
                has_child: false,
            }
        ]
    },
    {
        id: 16,
        title: 'Tainted Input',
        has_child: true,
        childrens: [
            {
                id: 1,
                title: 'External Authentication Injection',
                has_child: false,
            },
            {
                id: 2,
                title: 'Text Injection',
                has_child: false,
            },
            {
                id: 3,
                title: 'Parameter Pollution',
                has_child: false,
            },
            {
                id: 4,
                title: 'Content spoofing',
                has_child: true,
                childrens: [
                    {
                        id: 1,
                        title: 'Spoof Error Message Content',
                        has_child: false,
                    },
                    {
                        id: 2,
                        title: 'Spoof HTML Content',
                        has_child: false,
                    }
                ]
            },
            {
                id: 5,
                title: 'iframe Injection',
                has_child: false,
            },
            {
                id: 6,
                title: 'External Authentication Injection',
                has_child: false,
            },
            {
                id: 7,
                title: 'Email HTML Injection',
                has_child: false,
            },
            {
                id: 8,
                title: 'XML unsecure usage',
                has_child: true,
                childrens: [
                    {
                        id: 1,
                        title: 'XML External Entity Injection (XXE)',
                        has_child: false,
                    },
                    {
                        id: 2,
                        title: 'XML Entity Expansion',
                        has_child: false,
                    },
                    {
                        id: 3,
                        title: 'XML Injection',
                        has_child: false,
                    }]
            },
            {
                id: 9,
                title: 'SQL Injection',
                has_child: true,
                childrens: [
                    {
                        id: 1,
                        title: 'Error based SQL injection ',
                        has_child: false,
                    },
                    {
                        id: 2,
                        title: 'Out-of-band SQL injection',
                        has_child: false,
                    },
                    {
                        id: 3,
                        title: 'Server-Side Request Forgery (SSRF)',
                        has_child: false,
                    },
                    {
                        id: 4,
                        title: 'Union based SQL injection',
                        has_child: false,
                    },
                    {
                        id: 5,
                        title: 'Incorrect Type Handling',
                        has_child: false,
                    },
                    {
                        id: 6,
                        title: 'Incorrect Filtered Escape Characters',
                        has_child: false,
                    },
                    {
                        id: 7,
                        title: 'Filter/Signature Evasion',
                        has_child: false,
                    },
                    {
                        id: 8,
                        title: 'Blind SQL injection',
                        has_child: false,
                    }
                ]
            },
            {
                id: 10,
                title: 'Cross-site scripting XSS',
                has_child: true,
                childrens: [
                    {
                        id: 1,
                        title: 'XSS - Cookie-Based',
                        has_child: false,
                    },
                    {
                        id: 2,
                        title: 'XSS - Universal (UXSS)',
                        has_child: false,
                    },
                    {
                        id: 3,
                        title: 'XSS - Generic',
                        has_child: false,
                    },
                    {
                        id: 4,
                        title: 'XSS - Self',
                        has_child: false,
                    },
                    {
                        id: 5,
                        title: 'XSS - TRACE Method',
                        has_child: false,
                    },
                    {
                        id: 6,
                        title: 'XSS - Stored',
                        has_child: false,
                    },
                    {
                        id: 7,
                        title: 'XSS - Reflected',
                        has_child: false,
                    },
                    {
                        id: 8,
                        title: 'XSS - DOM',
                        has_child: false,
                    },
                    {
                        id: 9,
                        title: 'XSS - IE-Only',
                        has_child: false,
                    },
                    {
                        id: 10,
                        title: 'XSS - Referer',
                        has_child: false,
                    }

                ]
            },
            {
                id: 11,
                title: 'Deserialization of Untrusted Data',
                has_child: false,
            },
            {
                id: 12,
                title: 'File Inclusion (No execution)',
                has_child: false,
            },
            {
                id: 13,
                title: 'HTTP Request Smuggling',
                has_child: false,
            },
            {
                id: 14,
                title: 'HTTP Response Splitting',
                has_child: false,
            },
            {
                id: 15,
                title: 'HTTP Response Manipulation',
                has_child: false,
            },
            {
                id: 16,
                title: 'Insecure Direct Object Reference (IDOR)',
                has_child: false,
            },
            {
                id: 17,
                title: 'Improper Neutralization of HTTP Headers for Scripting Syntaxa',
                has_child: false,
            },
            {
                id: 18,
                title: 'Command Injection',
                has_child: false,
            },
            {
                id: 19,
                title: 'LDAP Injection',
                has_child: false,
            },
            {
                id: 20,
                title: 'Remote File Inclusion',
                has_child: false,
            },
            {
                id: 21,
                title: 'Resource Injection',
                has_child: false,
            },
            {
                id: 22,
                title: 'Code Injection',
                has_child: false,
            },
            {
                id: 23,
                title: 'Remote Code Execution (RCE)',
                has_child: false,
            },
            {
                id: 24,
                title: 'CRLF Injection',
                has_child: false,
            },
            {
                id: 25,
                title: 'Path Traversal',
                has_child: false,
            },
        ]
    },
    {
        id: 17,
        title: 'Insufficient Cryptography',
        has_child: true,
        childrens: [
            {
                id: 1,
                title: 'Improper Certificate Validation',
                has_child: false,
            },
            {
                id: 2,
                title: 'Cryptographic Issues - Generic',
                has_child: false,
            },
            {
                id: 3,
                title: 'Improper Following of a Certificate\'s Chain of Trust',
                has_child: false,
            },
            {
                id: 4,
                title: 'Inadequate Encryption Strength',
                has_child: false,
            },
            {
                id: 5,
                title: 'Key Exchange without Entity Authentication',
                has_child: false,
            },
            {
                id: 6,
                title: 'Missing Required Cryptographic Step',
                has_child: false,
            },
            {
                id: 7,
                title: 'Reusing a Nonce, Key Pair in Encryption',
                has_child: false,
            },
            {
                id: 8,
                title: 'Reversible One-Way Hash',
                has_child: false,
            },
            {
                id: 9,
                title: 'Storing Passwords in a Recoverable Format',
                has_child: false,
            },
            {
                id: 10,
                title: 'Use of Cryptographically Weak Pseudo-Random Number Generator (PRNG)',
                has_child: false,
            },
            {
                id: 11,
                title: 'Use of Hard-coded Cryptographic Key',
                has_child: false,
            },
            {
                id: 12,
                title: 'Use of Insufficiently Random Values',
                has_child: false,
            },
            {
                id: 13,
                title: 'Use of a Broken or Risky Cryptographic Algorithm',
                has_child: false,
            },
            {
                id: 14,
                title: 'Use of a Key Past its Expiration Date',
                has_child: false,
            },
            {
                id: 15,
                title: 'Cryptography Implementation Flaw',
                has_child: false,
            },
            {
                id: 16,
                title: 'Encrypted Information Compromised',
                has_child: false,
            },
            {
                id: 17,
                title: 'Weak Ciphers Used for Encryption',
                has_child: false,
            },
            {
                id: 18,
                title: 'Weak Cryptography for Passwords',
                has_child: false,
            },
        ]
    },
    {
        id: 18,
        title: 'Broken Access Control (BAC)',
        has_child: true,
        childrens: [
            {
                id: 1,
                title: 'Brute Force',
                has_child: true,
                childrens: [
                    {
                        id: 1,
                        title: 'Lack of Rate Limiting Protections (i.e. CAPTCHA)',
                        has_child: false,
                    },
                    {
                        id: 2,
                        title: 'Login Credentials',
                        has_child: false,
                    },
                ]
            },
            {
                id: 2,
                title: 'Forced Browsing',
                has_child: false,
            },
            {
                id: 3,
                title: 'Improper Access Control ',
                has_child: false,
            },
            {
                id: 4,
                title: 'Username Enumeration',
                has_child: false,
            },
            {
                id: 5,
                title: 'Server-Side Request Forgery (SSRF)',
                has_child: false,
            },
            {
                id: 6,
                title: 'Privilege Escalation',
                has_child: false,
            },
            {
                id: 7,
                title: 'Privacy Violation',
                has_child: false,
            },
            {
                id: 8,
                title: 'Path Traversal',
                has_child: false,
            },
            {
                id: 9,
                title: 'Key Exchange without Entity Authentication',
                has_child: false,
            },
            {
                id: 10,
                title: 'Insufficient Session Expiration',
                has_child: false,
            },
            {
                id: 11,
                title: 'Insecure Direct Object Reference (IDOR)',
                has_child: false,
            },
            {
                id: 12,
                title: 'Improper Authentication',
                has_child: false,
            }
        ]
    },
    {
        id: 19,
        title: 'Other',
        has_child: false
    }
];