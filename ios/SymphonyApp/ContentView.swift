import SwiftUI

struct ContentView: View {
    @State private var message = "Hello World from iOS!"
    @State private var isAnimating = false
    
    var body: some View {
        NavigationView {
            VStack(spacing: 30) {
                // App Icon
                Image(systemName: "music.note")
                    .font(.system(size: 80))
                    .foregroundColor(.blue)
                    .scaleEffect(isAnimating ? 1.2 : 1.0)
                    .animation(.easeInOut(duration: 2).repeatForever(autoreverses: true), value: isAnimating)
                
                // Title
                Text("Symphony iOS App")
                    .font(.largeTitle)
                    .fontWeight(.bold)
                    .foregroundColor(.primary)
                
                // Message
                Text(message)
                    .font(.title2)
                    .foregroundColor(.secondary)
                    .multilineTextAlignment(.center)
                    .padding(.horizontal)
                
                // Welcome Card
                VStack(alignment: .leading, spacing: 12) {
                    Text("Welcome to Symphony!")
                        .font(.headline)
                        .foregroundColor(.primary)
                    
                    Text("This is a simple iOS app boilerplate built with SwiftUI.")
                        .font(.body)
                        .foregroundColor(.secondary)
                    
                    Text("Features:")
                        .font(.subheadline)
                        .fontWeight(.semibold)
                        .padding(.top, 8)
                    
                    VStack(alignment: .leading, spacing: 8) {
                        FeatureRow(icon: "checkmark.circle.fill", text: "SwiftUI framework")
                        FeatureRow(icon: "checkmark.circle.fill", text: "Modern iOS design")
                        FeatureRow(icon: "checkmark.circle.fill", text: "Responsive layout")
                    }
                }
                .padding()
                .background(Color(.systemGray6))
                .cornerRadius(12)
                .padding(.horizontal)
                
                Spacer()
            }
            .padding()
            .navigationTitle("Symphony")
            .navigationBarTitleDisplayMode(.large)
            .onAppear {
                isAnimating = true
            }
        }
    }
}

struct FeatureRow: View {
    let icon: String
    let text: String
    
    var body: some View {
        HStack(spacing: 12) {
            Image(systemName: icon)
                .foregroundColor(.green)
                .font(.system(size: 16, weight: .semibold))
            
            Text(text)
                .font(.body)
                .foregroundColor(.primary)
            
            Spacer()
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
} 