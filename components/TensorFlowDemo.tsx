'use client'

import { useEffect, useState } from 'react'
import * as tf from '@tensorflow/tfjs'

export default function TensorFlowDemo() {
  const [modelLoaded, setModelLoaded] = useState(false)
  const [prediction, setPrediction] = useState<number | null>(null)

  useEffect(() => {
    // Initialize TensorFlow.js
    const initTensorFlow = async () => {
      try {
        // Simple example: Create a linear model
        const model = tf.sequential({
          layers: [
            tf.layers.dense({ inputShape: [1], units: 1 })
          ]
        })

        model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' })

        // Train the model with some dummy data
        const xs = tf.tensor2d([1, 2, 3, 4], [4, 1])
        const ys = tf.tensor2d([2, 4, 6, 8], [4, 1])

        await model.fit(xs, ys, { epochs: 100 })

        // Make a prediction
        const testX = tf.tensor2d([5], [1, 1])
        const pred = model.predict(testX) as tf.Tensor
        const predValue = await pred.data()
        setPrediction(predValue[0])
        setModelLoaded(true)

        // Cleanup
        xs.dispose()
        ys.dispose()
        testX.dispose()
        pred.dispose()
      } catch (error) {
        console.error('TensorFlow initialization error:', error)
      }
    }

    initTensorFlow()
  }, [])

  if (!modelLoaded) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 p-4 rounded-lg text-sm">
      <p className="text-[#FF6B35]">TensorFlow.js Loaded</p>
      {prediction && (
        <p className="text-white text-xs mt-1">Sample Prediction: {prediction.toFixed(2)}</p>
      )}
    </div>
  )
}


