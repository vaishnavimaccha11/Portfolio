import devAssistDashboard from '../assets/projects/devassist/devassist-dashboard.png'
import devAssistFindings from '../assets/projects/devassist/devassist-findings.png'
import devAssistHistory from '../assets/projects/devassist/devassist-history.png'
import devAssistLogin from '../assets/projects/devassist/devassist-login.png'
import devAssistWorkspace from '../assets/projects/devassist/devassist-workspace.png'

import smoteConfusionMatrix from '../assets/projects/smote/ConfusionMatrix.png'
import smoteConfusionMatrixTta from '../assets/projects/smote/ConfusionMatrix2.png'
import smoteDataset from '../assets/projects/smote/dataset.png'
import smoteOverview from '../assets/projects/smote/overview.png'
import smotePipeline from '../assets/projects/smote/pipeline.png'
import smoteRocCurve from '../assets/projects/smote/ROCCurve.png'

export type ProjectMetric = {
  value: string
  label: string
}

export type ProjectImage = {
  src: string
  alt: string
  caption: string
}

export type Project = {
  id: string
  number: string
  category: string
  title: string
  shortTitle: string
  description: string
  images?: ProjectImage[]
  image?: string
  imageAlt?: string
  features: string[]
  technologies: string[]
  metrics?: ProjectMetric[]
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    id: 'devassist-ai',
    number: '01',
    category: 'Full-Stack AI Platform',
    title: 'DevAssist AI',
    shortTitle: 'AI-powered developer workspace',
    description:
      'A full-stack AI platform that analyzes source code and software-engineering problems, generates structured findings and recommendations, and securely stores previous reviews for future reference.',

    images: [
      {
        src: devAssistDashboard,
        alt: 'DevAssist AI review dashboard showing score, metrics, findings, and recommendations',
        caption: 'AI review dashboard',
      },
      {
        src: devAssistFindings,
        alt: 'DevAssist AI detailed findings and engineering recommendations',
        caption: 'Detailed findings and recommendations',
      },
      {
        src: devAssistHistory,
        alt: 'DevAssist AI review history showing stored previous reviews',
        caption: 'Persistent review history',
      },
      {
        src: devAssistWorkspace,
        alt: 'DevAssist AI workspace containing an engineering problem and technology selector',
        caption: 'Engineering review workspace',
      },
      {
        src: devAssistLogin,
        alt: 'DevAssist AI secure login interface',
        caption: 'Secure authentication',
      },
    ],

    features: [
      'AI-powered code and engineering-problem analysis',
      'Structured scores, findings, strengths, and recommendations',
      'Secure authentication and protected application routes',
      'Persistent review history and detailed review pages',
      'Multi-technology input with Monaco Editor integration',
      'Responsive full-stack application with scalable APIs',
    ],

    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'OpenAI API',
      'JWT',
      'Monaco Editor',
    ],

    githubUrl: 'https://github.com/vaishnavimaccha/devassist-ai',
    liveUrl: 'https://devassist-ai.vercel.app',
  },

  {
    id: 'skin-lesion-classification',
    number: '02',
    category: 'Deep Learning Research',
    title:
      'Deep Learning with SMOTE for Improved Skin Lesion Classification',
    shortTitle: 'AI-assisted skin lesion classification',
    description:
      'A research-driven deep-learning project that applies Convolutional Neural Networks and SMOTE to improve the classification of dermatoscopic skin-lesion images while addressing class imbalance.',

    images: [
      {
        src: smoteOverview,
        alt: 'Overview of the deep learning with SMOTE skin lesion classification project',
        caption: 'Research project overview',
      },
      {
        src: smoteDataset,
        alt: 'HAM10000 skin lesion dataset overview with benign and malignant samples',
        caption: 'HAM10000 dataset and class balancing',
      },
      {
        src: smotePipeline,
        alt: 'End-to-end deep learning pipeline with preprocessing, augmentation, SMOTE, CNN, and prediction',
        caption: 'End-to-end research pipeline',
      },
      {
        src: smoteConfusionMatrix,
        alt: 'Confusion matrix showing skin lesion classification results',
        caption: 'Model confusion matrix',
      },
      {
        src: smoteConfusionMatrixTta,
        alt: 'Confusion matrix for skin lesion classification using test-time augmentation',
        caption: 'Test-time augmentation evaluation',
      },
      {
        src: smoteRocCurve,
        alt: 'ROC curve for the skin lesion classification model',
        caption: 'ROC curve and AUC evaluation',
      },
    ],

    features: [
      'Processed more than 10,000 dermatoscopic images',
      'Applied SMOTE to address severe class imbalance',
      'Built and evaluated a CNN-based classification pipeline',
      'Used image preprocessing and data augmentation',
      'Evaluated results using F1-score, AUC, ROC curve, and confusion matrix',
    ],

    technologies: [
      'Python',
      'TensorFlow',
      'Keras',
      'OpenCV',
      'Scikit-learn',
      'SMOTE',
      'NumPy',
      'Matplotlib',
    ],

    metrics: [
      {
        value: '92%',
        label: 'F1 Score',
      },
      {
        value: '~35%',
        label: 'Minority Recall Improvement',
      },
      {
        value: '~20%',
        label: 'Validation Accuracy Improvement',
      },
    ],

    githubUrl:"https://github.com/vaishnavimaccha11/Deep-Learning-with-SMOTE-for-Improved-Skin-Lesion-Classification",
  },
]